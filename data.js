window.BENCHMARK_DATA = {
  "lastUpdate": 1696030055020,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-java",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "jack-berg",
            "username": "jack-berg",
            "email": "34418638+jack-berg@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bdeb1e95cd24748523592877d82d64212496e96e",
          "message": "Add breedx-splk as approver (#5860)",
          "timestamp": "2023-09-28T16:00:02Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/bdeb1e95cd24748523592877d82d64212496e96e"
        },
        "date": 1695922923702,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7042.383864399045,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8119.3603425417705,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13496.410050425166,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16360.254936071939,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13790.273480879177,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1687795.7752821383,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8613.927989433703,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c66a51c4682ee4784168f23029c4421434066f4a",
          "message": "Update dependency io.netty:netty-bom to v4.1.99.Final (#5845)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-09-29T11:56:19-05:00",
          "tree_id": "29a959b127f515a7dfc5a870ea927be9444c0e76",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/c66a51c4682ee4784168f23029c4421434066f4a"
        },
        "date": 1696006806988,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7169.314971779628,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8396.29803741356,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12694.15900029212,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 15663.078138546713,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16032.165890976106,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1686243.6863591715,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8657.592105136986,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bac9941a587582ba43f3cfa7d82bfedcc5e1cb05",
          "message": "Update dependency com.diffplug.spotless:spotless-plugin-gradle to v6.22.0 (#5863)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-09-29T11:56:44-05:00",
          "tree_id": "8e683d61b872638e1cc97eecb4d38dda3f58796b",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/bac9941a587582ba43f3cfa7d82bfedcc5e1cb05"
        },
        "date": 1696007099349,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7103.651802947787,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8211.994739495969,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12981.143194573548,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16444.72984601983,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15270.019178347886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1684514.0437063545,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8561.242427305964,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb4c2193aa39ae29aa1af4526a3067d715df9011",
          "message": "Update plugin com.diffplug.spotless to v6.22.0 (#5864)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-09-29T12:39:57-05:00",
          "tree_id": "2bc5962b0395bde7b4f64c2624e74ae15894470a",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/bb4c2193aa39ae29aa1af4526a3067d715df9011"
        },
        "date": 1696009442835,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7137.227174281769,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 7953.3431531611295,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12368.730017323123,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 18164.297425868608,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14522.233940468785,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1690107.5867245807,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8621.022618446033,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Josh Suereth",
            "username": "jsuereth",
            "email": "Joshua.Suereth@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5c1bd6cbfe8c8316355ac2db2af86961c14fcd2f",
          "message": "Add adaptable circular buffer implementation for ExponentialCounter. (#4087)\n\n* Add adaptable circular buffer implementation for ExponentialCounter and expose hooks to test its use in Exponential Histogram aggregator.\r\n\r\n* Clean up some adapting circular buffer code.\r\n\r\n* Fix style issues.\r\n\r\n* Apply spotless.\r\n\r\n* Add tests for adapting integer array.\r\n\r\n* Finish wiring ability to remember previous integer cell size and expand testing.\r\n\r\n* Update array copy from code review.\r\n\r\n* Fixes/cleanups from review.\r\n\r\n- Fix a bug in equality where it was forcing ExponentialCounter to have\r\n  the same offset, even if it had stored 0 counts in all buckets. This\r\n  interacts negatively with merge/diff tests where creating a fresh\r\n  exponential bucket would have different indexStart then diff-ing\r\n  another.\r\n- Modify default exponential bucket counter to be adapting circular\r\n  buffer.\r\n- Remove some not-well-though-out methods (like zeroOf, zeroFrom) in\r\n  favor of a \"clear\" method on ExponentialCounter\r\n- Modify ExponentialBucketStrategy to be an actual implementation.\r\n\r\n* Improve testing of copy behavior across exponential-counter implementations.\r\n\r\n* Last fix/cleanup for PR.  Remove remaining TODO around preserving runtime optimisations.\r\n\r\n* Fixes from review.\r\n\r\n* Add test to ensure 0 is returned from exponential counters outside popualted range.\r\n\r\n* Add a bunch of extra equality tests.\r\n\r\n* run spotless.\r\n\r\n* Add note about equality.\r\n\r\n* Add copy() method to AdaptingIntegerArray, update tests.\r\n\r\n* Fix checkstyle.\r\n\r\n* Add internal disclaimer, reduce visibility of test classes\r\n\r\nCo-authored-by: jack-berg <jberg@newrelic.com>",
          "timestamp": "2022-02-04T17:21:04Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/5c1bd6cbfe8c8316355ac2db2af86961c14fcd2f"
        },
        "date": 1696022880275,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7204.412237389598,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8333.425527033203,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13198.91341511784,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17648.806632862244,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13688.67884177898,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1685819.8162080892,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 10795.195730671205,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jack-berg",
            "username": "jack-berg",
            "email": "34418638+jack-berg@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3938d96ce253ed42c2f4a7768c36cb5269acc128",
          "message": "Manual cherrypick for commits 8bbb0e25da6bc8663cbff9ae5975ca20ba229100, b2873186e322d1f3d03d0241aa7a9d160fed4782 (#4104)",
          "timestamp": "2022-01-21T14:35:29Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/3938d96ce253ed42c2f4a7768c36cb5269acc128"
        },
        "date": 1696023168762,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7166.016165145586,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8391.494510203867,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12233.716977861079,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 15624.720211923637,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13626.953744312148,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1687370.8827830453,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 10792.649045491282,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "anuraaga@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89675582a173dc2df2aa43040decdb2a43ee0989",
          "message": "Use custom resource to avoid version number in assertion string. (#4065)",
          "timestamp": "2022-01-07T05:32:47Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/89675582a173dc2df2aa43040decdb2a43ee0989"
        },
        "date": 1696023401970,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7230.992954151982,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8388.05091967967,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13286.559214182815,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 18293.29288409531,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16649.856050925257,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1690272.5554244458,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 10922.125169022398,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "anuraaga@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb80383df8a3fef56bcffcc011cfc50ff14d6468",
          "message": "Extract SummaryData interface for DoubleSummaryData (#4224)\n\n* Extract SummaryData interface for DoubleSummaryData\r\n\r\n* ValueAtQuantile too\r\n\r\n* javadoc",
          "timestamp": "2022-03-04T08:20:21Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/cb80383df8a3fef56bcffcc011cfc50ff14d6468"
        },
        "date": 1696023717949,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7090.040957578092,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8289.06785306184,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13720.698641001984,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16236.855682342353,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14540.014520173707,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1684463.7895192255,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 10763.104378823966,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Trask Stalnaker",
            "username": "trask",
            "email": "trask.stalnaker@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4a0962b42f774e9ee5ec5f4951443b138027ab37",
          "message": "Fix release branch version (#4358)",
          "timestamp": "2022-04-08T19:02:48Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/4a0962b42f774e9ee5ec5f4951443b138027ab37"
        },
        "date": 1696024035632,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7138.103739542067,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8136.288336048434,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13124.370957722256,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 18057.353988603667,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15514.819337261608,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1685856.128775043,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8594.857500903458,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Java Bot",
            "email": "97938252+opentelemetry-java-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0e0429d0ac37bb25053e468fe708a50006f87a9b",
          "message": "Prepare release 1.14.0 (#4447)",
          "timestamp": "2022-05-09T17:39:47Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/0e0429d0ac37bb25053e468fe708a50006f87a9b"
        },
        "date": 1696024313412,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7020.063170579026,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8044.135983993832,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12526.121116552556,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 18020.572321457144,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13955.222051675035,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1690219.6286484029,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8557.584674765458,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Java Bot",
            "email": "97938252+opentelemetry-java-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ed383f80e82f8b62353e4903472aa7bc5320600b",
          "message": "Prepare release 1.16.0 (#4604)",
          "timestamp": "2022-07-13T02:06:27Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/ed383f80e82f8b62353e4903472aa7bc5320600b"
        },
        "date": 1696024573765,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7044.818837724191,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8520.84863938754,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 11853.658402030998,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17297.07789052132,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16405.669020288176,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1685961.8670305707,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8607.435994167441,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Java Bot",
            "email": "97938252+opentelemetry-java-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b7779be1542ae4acfcbb99411785ecc15f6ca1cd",
          "message": "Prepare release 1.15.0 (#4522)",
          "timestamp": "2022-06-10T15:58:49Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/b7779be1542ae4acfcbb99411785ecc15f6ca1cd"
        },
        "date": 1696024819920,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7088.94927182968,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8550.551221832382,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13659.807141689424,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16723.23132553646,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14366.6901839544,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1685780.6313254137,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8591.774193621324,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Java Bot",
            "email": "97938252+opentelemetry-java-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2d6dfd02588ec0b46440a014387f8589a7d62b06",
          "message": "Prepare release 1.17.0 (#4686)\n\nCo-authored-by: opentelemetrybot <107717825+opentelemetrybot@users.noreply.github.com>",
          "timestamp": "2022-08-12T16:49:48Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/2d6dfd02588ec0b46440a014387f8589a7d62b06"
        },
        "date": 1696025154425,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7059.754412953204,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8433.488855909047,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12341.342195956247,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 21866.552284451547,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15762.616651478344,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1689311.0911105138,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8602.627959526324,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Java Bot",
            "email": "97938252+opentelemetry-java-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7b9f9f372074779224aef3dcac5837ca51457798",
          "message": "Prepare release 1.18.0 (#4742)\n\nCo-authored-by: opentelemetrybot <107717825+opentelemetrybot@users.noreply.github.com>",
          "timestamp": "2022-09-09T19:07:46Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/7b9f9f372074779224aef3dcac5837ca51457798"
        },
        "date": 1696025464158,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7126.6060305034935,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8363.0934021091,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12028.865475439383,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17260.68997852266,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 17891.866408560796,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1684027.612163569,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8621.135991369261,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "710587680b17239d072bd3b9bc815c6ce168b09e",
          "message": "[release/v1.21.x] Prepare release 1.21.0 (#5035)\n\n* Prepare release 1.21.0\r\n\r\n* Fix version-dependent test\r\n\r\nCo-authored-by: Jack Berg <jberg@newrelic.com>",
          "timestamp": "2022-12-09T19:54:41Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/710587680b17239d072bd3b9bc815c6ce168b09e"
        },
        "date": 1696025764824,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7151.555439711781,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8670.931832526332,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12887.494427646072,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 15124.888705082418,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16382.846896072195,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1689717.7461252422,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8587.969104408241,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f912f824ae79de6bdc5d302ebac239b4f17df163",
          "message": "Prepare release 1.19.0 (#4824)",
          "timestamp": "2022-10-07T14:27:20Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/f912f824ae79de6bdc5d302ebac239b4f17df163"
        },
        "date": 1696026053594,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7169.397187962885,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8105.9617620431645,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 11500.973290675329,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17468.925325740885,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15948.537549308287,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1688792.0595725677,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8582.479401534625,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fbeb0d854cbf32b350ffb7fb02ee002d4ae17297",
          "message": "Prepare release 1.22.0 (#5093)",
          "timestamp": "2023-01-06T15:07:58Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/fbeb0d854cbf32b350ffb7fb02ee002d4ae17297"
        },
        "date": 1696026347475,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7033.838028063833,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8079.763194995054,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13558.748228550243,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16653.259051010577,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14160.243326854878,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1688598.4637345045,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8617.944853173454,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a295066718203267ec45fa8a688da1b2c6e107b8",
          "message": "Prepare release 1.23.0 (#5199)",
          "timestamp": "2023-02-10T20:29:57Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/a295066718203267ec45fa8a688da1b2c6e107b8"
        },
        "date": 1696026673822,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7120.594299948856,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8429.81267405753,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12684.794632138339,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17610.47159751478,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13807.498017423179,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1686599.7763645288,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8627.41920602134,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "49577ffbde33567d258b588c6567ebb1b798a657",
          "message": "Prepare release 1.23.1 (#5226)",
          "timestamp": "2023-02-15T20:37:21Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/49577ffbde33567d258b588c6567ebb1b798a657"
        },
        "date": 1696026893108,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7198.681573865023,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8265.78573629809,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 10614.128166912755,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17002.015261821758,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15356.91458055604,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1686783.9280818575,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8614.755658527465,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jack-berg",
            "username": "jack-berg",
            "email": "34418638+jack-berg@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "05b6dfa9f6b7951f31d3f021ed6df3e35d3b8660",
          "message": "Skip build and publish step to finish release (#5283)",
          "timestamp": "2023-03-10T17:12:36Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/05b6dfa9f6b7951f31d3f021ed6df3e35d3b8660"
        },
        "date": 1696027224607,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7098.201421695415,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8264.825374858348,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13108.53442608683,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16870.747455270226,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16330.867132476778,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1689810.4723520507,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8568.440719498962,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cea8cf11d6914a35cdd3eb9bd85ebd054439216f",
          "message": "[release/v1.25.x] Prepare release 1.25.0 (#5358)",
          "timestamp": "2023-04-07T14:41:42Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/cea8cf11d6914a35cdd3eb9bd85ebd054439216f"
        },
        "date": 1696027525486,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7073.629200577961,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8504.293201067743,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13212.06050978501,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16803.045987897967,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16033.886957952385,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1689151.7798097045,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8137.419568792165,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "22fdec25d213adba0aa180e979714742e358b3f6",
          "message": "[release/v1.26.x] Prepare release 1.26.0 (#5426)",
          "timestamp": "2023-05-05T19:35:51Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/22fdec25d213adba0aa180e979714742e358b3f6"
        },
        "date": 1696027826183,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7170.430812853113,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8397.367845147954,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13311.16025490926,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16176.100405204133,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16246.182471247055,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1689201.8050383113,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8600.532225161673,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a882c8a0085246bd0c883a26cb4fd7c0ee37339",
          "message": "[release/v1.27.x] Prepare release 1.27.0 (#5521)",
          "timestamp": "2023-06-09T16:53:53Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/5a882c8a0085246bd0c883a26cb4fd7c0ee37339"
        },
        "date": 1696028130882,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7039.877068244718,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8672.754418651393,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12704.646637637852,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16429.19033504768,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14906.123923191251,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1688525.9507707655,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8604.544333089358,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1733d2cfd76b7808605b62fc60f87f970e7e0b22",
          "message": "[release/v1.28.x] Prepare release 1.28.0 (#5608)",
          "timestamp": "2023-07-07T12:22:23Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/1733d2cfd76b7808605b62fc60f87f970e7e0b22"
        },
        "date": 1696028466757,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7124.955473658671,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8249.656339629497,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 10739.602271865775,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17924.41202552987,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 16822.3783935394,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1688680.7303102263,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8619.813017040404,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "48f13cae7d764fea85d440ec97e027f5cc461824",
          "message": "[release/v1.30.x] Prepare release 1.30.0 (#5801)",
          "timestamp": "2023-09-08T16:28:45Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/48f13cae7d764fea85d440ec97e027f5cc461824"
        },
        "date": 1696028764342,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7154.3602016397235,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8587.912063566815,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 12807.055205496972,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 18890.934086935544,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15424.549389795362,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1683166.6172268249,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8593.119528974237,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "60c06dbe682f686f1a13907604f93d7adeecbef9",
          "message": "[release/v1.30.x] Prepare release 1.30.1 (#5814)",
          "timestamp": "2023-09-11T15:59:56Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/60c06dbe682f686f1a13907604f93d7adeecbef9"
        },
        "date": 1696029008541,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7102.103487620163,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8630.992553867081,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13456.345737381745,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17623.655150439707,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 13638.291126404434,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1685505.8477622315,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8579.428711349534,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "John Watson",
            "username": "jkwatson",
            "email": "jkwatson@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "33094f4cb14a017f0b1312988c9ee8ab51412876",
          "message": "Update the CHANGELOG.md for the upcoming 1.7.0 release (#3707)\n\n* Update the CHANGELOG.md for the upcoming 1.7.0 release\r\n\r\n* formatting\r\n\r\n* updates for metric name changes and deprecation of the proto module",
          "timestamp": "2021-10-08T15:17:38Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/33094f4cb14a017f0b1312988c9ee8ab51412876"
        },
        "date": 1696029346813,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7165.369485379228,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8040.048387750954,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 10918.923232980216,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17818.33327684344,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 17287.166990812817,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 565954.7239160243,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 10719.081407549867,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "John Watson",
            "username": "jkwatson",
            "email": "jkwatson@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "12225fecaabb78fec156f0bbd4bca9d22f030b87",
          "message": "Update the CHANGELOG for the upcoming 1.6.0 release (#3601)\n\n* Update the CHANGELOG for the upcoming 1.6.0 release\r\n\r\n* add a late-breaking item",
          "timestamp": "2021-09-11T15:15:28Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/12225fecaabb78fec156f0bbd4bca9d22f030b87"
        },
        "date": 1696029728969,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7016.102874474975,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8431.961959937318,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13525.130846109005,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 17911.035221427384,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 14569.10836463992,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 567217.5462010694,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 10716.20722282587,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenTelemetry Bot",
            "username": "opentelemetrybot",
            "email": "107717825+opentelemetrybot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cbb44502c1ae4f85bbb28df86c408214e2eda219",
          "message": "[release/v1.29.x] Prepare release 1.29.0 (#5705)",
          "timestamp": "2023-08-11T16:15:20Z",
          "url": "https://github.com/open-telemetry/opentelemetry-java/commit/cbb44502c1ae4f85bbb28df86c408214e2eda219"
        },
        "date": 1696030054105,
        "tool": "jmh",
        "benches": [
          {
            "name": "io.opentelemetry.sdk.trace.FillSpanBenchmark.setFourAttributes",
            "value": 7183.934752049216,
            "unit": "ops/ms",
            "extra": "iterations: 20\nforks: 3\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_01Thread",
            "value": 8338.183486288886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_02Threads",
            "value": 13042.576209622759,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 2"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_05Threads",
            "value": 16795.787539701956,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 5"
          },
          {
            "name": "io.opentelemetry.sdk.trace.SpanBenchmark.simpleSpanStartAddEventEnd_10Threads",
            "value": 15084.542323364183,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 10"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"1\",\"spanCount\":\"1000\"} )",
            "value": 1685103.0464896567,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "io.opentelemetry.sdk.trace.export.MultiSpanExporterBenchmark.export ( {\"exporterCount\":\"3\",\"spanCount\":\"1000\"} )",
            "value": 8584.335323935968,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}