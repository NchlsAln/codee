"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinRuntime = void 0;
exports.kotlinRuntime = {
    runtimeModel: "JVM bytecode with JIT on HotSpot; Kotlin/Native AOT; Kotlin/JS for web targets.",
    packageManager: "Gradle (primary), Maven",
    lspServer: "kotlin-language-server",
    compilationTargets: ["jvm", "native", "js"],
    memoryModel: {
        stack: "JVM stack frames or native stack",
        heap: "Managed heap on JVM or Kotlin/Native heap",
        gc: "JVM GC or Kotlin/Native GC",
        ownership: "Shared references; no ownership types"
    },
    concurrencyModel: {
        coroutines: "Structured concurrency with suspend functions",
        threading: "JVM threads or native workers",
        async: "kotlinx.coroutines with dispatchers",
        channels: "Channel and Flow for streaming data"
    },
    compilation: {
        pipeline: ["kotlinc", "bytecode", "JIT"],
        artifacts: [".class", ".jar", ".klib"],
        toolchains: ["Gradle", "Maven", "Kotlin/Native"]
    },
    performance: {
        latency: "Moderate startup on JVM; faster with native",
        throughput: "High on long-running JVM services",
        notes: ["Use coroutines for IO", "Prefer inline functions"]
    },
    ffi: {
        jvm: ["Java interop", "JNI", "JNA"],
        native: ["cinterop", "Kotlin/Native"],
        wasm: ["Kotlin/JS + WASM"]
    }
};
