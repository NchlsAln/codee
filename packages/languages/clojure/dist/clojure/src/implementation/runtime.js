"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureRuntime = void 0;
exports.clojureRuntime = {
    name: "Clojure on JVM",
    supportedVersions: ["1.11", "1.12"],
    memoryModel: {
        stack: "JVM stack frames",
        heap: "Managed JVM heap with persistent data structures",
        gc: "JVM garbage collection",
        ownership: "Immutable values with structural sharing"
    },
    concurrencyModel: {
        stm: "Refs, atoms, agents, and STM transactions",
        async: "core.async channels and go blocks",
        futures: "Futures and promises",
        parallelism: "pmap and reducers"
    },
    compilation: {
        pipeline: ["reader", "macro expansion", "bytecode"],
        artifacts: [".class"],
        alternatives: ["ClojureScript", "Babashka"]
    },
    performance: {
        latency: "Moderate startup; fast REPL workflows",
        throughput: "Strong for data processing workloads",
        notes: ["Prefer transducers", "Avoid reflection", "Use primitive hints"]
    },
    ffi: {
        jvm: ["Java interop", "JNI"],
        native: ["JNA"],
        wasm: ["SCI/Wasm runtimes"]
    }
};
