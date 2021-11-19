/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */

package io.opentelemetry.exporter.otlp.testing.internal;

import static org.assertj.core.api.Assertions.assertThat;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.Message;
import com.linecorp.armeria.common.grpc.protocol.ArmeriaStatusException;
import com.linecorp.armeria.server.ServerBuilder;
import com.linecorp.armeria.server.ServiceRequestContext;
import com.linecorp.armeria.server.grpc.protocol.AbstractUnaryGrpcService;
import com.linecorp.armeria.server.logging.LoggingService;
import com.linecorp.armeria.testing.junit5.server.ServerExtension;
import io.github.netmikey.logunit.api.LogCapturer;
import io.opentelemetry.exporter.otlp.internal.Marshaler;
import io.opentelemetry.exporter.otlp.internal.grpc.OkHttpGrpcExporter;
import io.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
import io.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
import io.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
import io.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
import io.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
import io.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
import io.opentelemetry.sdk.common.CompletableResultCode;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import java.util.stream.Collectors;
import javax.annotation.Nullable;
import org.assertj.core.api.iterable.ThrowingExtractor;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.slf4j.event.Level;
import org.slf4j.event.LoggingEvent;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public abstract class AbstractGrpcTelemetryExporterTest<T, U extends Message, V> {

  static final ConcurrentLinkedQueue<Object> exportedResourceTelemetry =
      new ConcurrentLinkedQueue<>();

  @Nullable static volatile ArmeriaStatusException grpcError;

  @RegisterExtension
  static final ServerExtension server =
      new ServerExtension() {
        @Override
        protected void configure(ServerBuilder sb) {
          sb.service(
              "/opentelemetry.proto.collector.trace.v1.TraceService/Export",
              new CollectorService<>(
                  ExportTraceServiceRequest::parseFrom,
                  ExportTraceServiceRequest::getResourceSpansList,
                  ExportTraceServiceResponse.getDefaultInstance().toByteArray()));
          sb.service(
              "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export",
              new CollectorService<>(
                  ExportMetricsServiceRequest::parseFrom,
                  ExportMetricsServiceRequest::getResourceMetricsList,
                  ExportMetricsServiceResponse.getDefaultInstance().toByteArray()));
          sb.service(
              "/opentelemetry.proto.collector.logs.v1.LogsService/Export",
              new CollectorService<>(
                  ExportLogsServiceRequest::parseFrom,
                  ExportLogsServiceRequest::getResourceLogsList,
                  ExportLogsServiceResponse.getDefaultInstance().toByteArray()));

          sb.decorator(LoggingService.newDecorator());
        }
      };

  private static class CollectorService<T> extends AbstractUnaryGrpcService {
    private final ThrowingExtractor<byte[], T, InvalidProtocolBufferException> parse;
    private final Function<T, List<? extends Object>> getResourceTelemetry;
    private final byte[] successResponse;

    private CollectorService(
        ThrowingExtractor<byte[], T, InvalidProtocolBufferException> parse,
        Function<T, List<? extends Object>> getResourceTelemetry,
        byte[] successResponse) {
      this.parse = parse;
      this.getResourceTelemetry = getResourceTelemetry;
      this.successResponse = successResponse;
    }

    @Override
    protected CompletionStage<byte[]> handleMessage(ServiceRequestContext ctx, byte[] message) {
      final T request;
      try {
        request = parse.extractThrows(message);
      } catch (InvalidProtocolBufferException e) {
        throw new UncheckedIOException(e);
      }
      exportedResourceTelemetry.addAll(getResourceTelemetry.apply(request));
      ArmeriaStatusException grpcError = AbstractGrpcTelemetryExporterTest.grpcError;
      if (grpcError != null) {
        throw grpcError;
      }
      return CompletableFuture.completedFuture(successResponse);
    }
  }

  @RegisterExtension
  LogCapturer logs = LogCapturer.create().captureForType(OkHttpGrpcExporter.class);

  private final String type;
  private final U resourceTelemetryInstance;

  private V exporter;

  protected AbstractGrpcTelemetryExporterTest(String type, U resourceTelemetryInstance) {
    this.type = type;
    this.resourceTelemetryInstance = resourceTelemetryInstance;
  }

  protected void setGrpcError(int code, @Nullable String message) {
    grpcError = new ArmeriaStatusException(code, message);
  }

  @BeforeAll
  void setUp() {
    exporter = createExporter(server.httpUri().toString());
  }

  @AfterAll
  void tearDown() {
    shutdownExporter(exporter);
  }

  @AfterEach
  void reset() {
    exportedResourceTelemetry.clear();
    grpcError = null;
  }

  @Test
  void export() {
    List<T> telemetry = Collections.singletonList(generateFakeTelemetry());
    assertThat(doExport(exporter, telemetry).join(10, TimeUnit.SECONDS).isSuccess()).isTrue();
    List<U> expectedResourceTelemetry = toProto(telemetry);
    assertThat(exportedResourceTelemetry).containsExactlyElementsOf(expectedResourceTelemetry);
  }

  @Test
  void multipleItems() {
    List<T> telemetry = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
      telemetry.add(generateFakeTelemetry());
    }
    assertThat(doExport(exporter, telemetry).join(10, TimeUnit.SECONDS).isSuccess()).isTrue();
    List<U> expectedResourceTelemetry = toProto(telemetry);
    assertThat(exportedResourceTelemetry).containsExactlyElementsOf(expectedResourceTelemetry);
  }

  @Test
  void deadlineSetPerExport() throws InterruptedException {
    V exporter = createExporterWithTimeout(server.httpUri().toString(), Duration.ofMillis(100));
    try {
      TimeUnit.MILLISECONDS.sleep(300);
      CompletableResultCode result =
          doExport(exporter, Collections.singletonList(generateFakeTelemetry()));
      assertThat(result.join(10, TimeUnit.SECONDS).isSuccess()).isTrue();
    } finally {
      shutdownExporter(exporter);
    }
  }

  @Test
  void exportAfterShutdown() {
    V exporter = createExporter(server.httpUri().toString());
    shutdownExporter(exporter);
    assertThat(
            doExport(exporter, Collections.singletonList(generateFakeTelemetry()))
                .join(10, TimeUnit.SECONDS)
                .isSuccess())
        .isFalse();
  }

  @Test
  void doubleShutdown() {
    V exporter = createExporter(server.httpUri().toString());
    assertThat(shutdownExporter(exporter).join(10, TimeUnit.SECONDS).isSuccess()).isTrue();
    assertThat(shutdownExporter(exporter).join(10, TimeUnit.SECONDS).isSuccess()).isTrue();
  }

  @Test
  void error() {
    setGrpcError(13, null);
    assertThat(
            doExport(exporter, Collections.singletonList(generateFakeTelemetry()))
                .join(10, TimeUnit.SECONDS)
                .isSuccess())
        .isFalse();
    LoggingEvent log =
        logs.assertContains(
            "Failed to export "
                + type
                + "s. Server responded with gRPC status code 13. Error message:");
    assertThat(log.getLevel()).isEqualTo(Level.WARN);
  }

  @Test
  void errorWithMessage() {
    setGrpcError(8, "out of quota");
    assertThat(
            doExport(exporter, Collections.singletonList(generateFakeTelemetry()))
                .join(10, TimeUnit.SECONDS)
                .isSuccess())
        .isFalse();
    LoggingEvent log =
        logs.assertContains(
            "Failed to export "
                + type
                + "s. Server responded with gRPC status code 8. Error message: out of quota");
    assertThat(log.getLevel()).isEqualTo(Level.WARN);
  }

  @Test
  void errorWithEscapedMessage() {
    setGrpcError(5, "クマ🐻");
    assertThat(
            doExport(exporter, Collections.singletonList(generateFakeTelemetry()))
                .join(10, TimeUnit.SECONDS)
                .isSuccess())
        .isFalse();
    LoggingEvent log =
        logs.assertContains(
            "Failed to export "
                + type
                + "s. Server responded with gRPC status code 5. Error message: クマ🐻");
    assertThat(log.getLevel()).isEqualTo(Level.WARN);
  }

  @Test
  void testExport_Unavailable() {
    setGrpcError(14, null);
    assertThat(
            doExport(exporter, Collections.singletonList(generateFakeTelemetry()))
                .join(10, TimeUnit.SECONDS)
                .isSuccess())
        .isFalse();
    LoggingEvent log =
        logs.assertContains(
            "Failed to export "
                + type
                + "s. Server is UNAVAILABLE. "
                + "Make sure your collector is running and reachable from this network.");
    assertThat(log.getLevel()).isEqualTo(Level.ERROR);
  }

  @Test
  void testExport_Unimplemented() {
    setGrpcError(12, "UNIMPLEMENTED");
    assertThat(
            doExport(exporter, Collections.singletonList(generateFakeTelemetry()))
                .join(10, TimeUnit.SECONDS)
                .isSuccess())
        .isFalse();
    LoggingEvent log =
        logs.assertContains(
            "Failed to export "
                + type
                + "s. Server responded with UNIMPLEMENTED. "
                + "This usually means that your collector is not configured with an otlp "
                + "receiver in the \"pipelines\" section of the configuration. "
                + "Full error message: UNIMPLEMENTED");
    assertThat(log.getLevel()).isEqualTo(Level.ERROR);
  }

  protected abstract V createExporter(String endpoint);

  protected abstract V createExporterWithTimeout(String endpoint, Duration timeout);

  protected abstract CompletableResultCode shutdownExporter(V exporter);

  protected abstract CompletableResultCode doExport(V exporter, List<T> telemetry);

  protected abstract T generateFakeTelemetry();

  protected abstract Marshaler[] toMarshalers(List<T> telemetry);

  private List<U> toProto(List<T> telemetry) {
    return Arrays.stream(toMarshalers(telemetry))
        .map(
            marshaler -> {
              ByteArrayOutputStream bos = new ByteArrayOutputStream();
              try {
                marshaler.writeBinaryTo(bos);
                @SuppressWarnings("unchecked")
                U result =
                    (U)
                        resourceTelemetryInstance
                            .newBuilderForType()
                            .mergeFrom(bos.toByteArray())
                            .build();
                return result;
              } catch (IOException e) {
                throw new UncheckedIOException(e);
              }
            })
        .collect(Collectors.toList());
  }
}