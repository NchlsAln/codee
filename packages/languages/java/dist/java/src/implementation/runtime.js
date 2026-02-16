"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaRuntime = void 0;
exports.javaRuntime = {
    name: "Java",
    toolchain: "javac",
    runtime: "JVM",
    memoryModel: "garbage-collected heap with managed bytecode",
    asyncModel: "CompletableFuture and ExecutorService",
    memoryDetails: {
        stack: "Thread stack for local frames",
        heap: "Managed heap with generational GC",
        gc: "G1/ZGC/Shenandoah options",
        ownership: "Shared references; no ownership types"
    },
    concurrencyModel: {
        threading: "OS threads via java.lang.Thread and Executors",
        async: "CompletableFuture and reactive streams",
        parallel: "ForkJoinPool for parallel streams",
        synchronization: "synchronized, locks, atomics"
    },
    compilation: {
        pipeline: ["javac", "bytecode", "JIT"],
        artifacts: [".class", ".jar", "jmod"],
        runtimeProfiles: ["server", "client", "AOT (GraalVM)"]
    },
    performance: {
        latency: "Moderate startup; optimized with JIT",
        throughput: "High for long-running services",
        notes: ["Warmup required", "Use JFR for profiling"]
    },
    ffi: {
        native: ["JNI", "JNA", "Panama (incubator)"],
        wasm: ["GraalVM WASM", "TeaVM"],
        interop: ["Kotlin/Scala on JVM", "gRPC/Protobuf"]
    }
};
