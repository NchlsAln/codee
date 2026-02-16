"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaRuntime = void 0;
exports.juliaRuntime = {
    name: "Julia (LLVM JIT)",
    supportedVersions: ["1.9", "1.10", "1.11"],
    memoryModel: {
        stack: "Native stack frames with escape analysis",
        heap: "GC-managed heap for objects",
        gc: "Generational, non-moving GC",
        ownership: "Managed references with type-based escape analysis"
    },
    concurrencyModel: {
        threads: "Native threads with @threads and task scheduler",
        async: "Tasks and Channels with cooperative scheduling",
        channels: "Channel{T} for coordination",
        distribution: "Distributed stdlib for multi-process execution"
    },
    compilation: {
        pipeline: ["Julia AST", "type inference", "LLVM IR", "native code"],
        artifacts: [".ji", "sysimage"],
        alternatives: ["PackageCompiler", "static sysimages"]
    },
    performance: {
        latency: "JIT warm-up costs; cache with precompile",
        throughput: "High for numeric workloads with type stability",
        notes: ["Ensure type stability", "Avoid global variables", "Use @inbounds/@views carefully"]
    },
    ffi: {
        c: ["ccall", "CBinding"],
        native: ["PackageCompiler", "BinaryBuilder"],
        wasm: ["Wasm backend (experimental)"]
    }
};
