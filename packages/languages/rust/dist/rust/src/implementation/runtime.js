"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustRuntime = void 0;
exports.rustRuntime = {
    name: "Rust",
    editions: ["2018", "2021"],
    memoryModel: {
        stack: "Values on stack with deterministic drop",
        heap: "Explicit heap allocation via Box, Vec, Arc, etc.",
        gc: "No GC; ownership and lifetimes enforce safety",
        ownership: "Move semantics with borrowing and lifetimes"
    },
    concurrencyModel: {
        threading: "std::thread with Send/Sync guarantees",
        async: "async/await with executors (tokio, async-std)",
        messaging: "channels (std, tokio, crossbeam)",
        parallel: "rayon data-parallel iterators"
    },
    compilation: {
        pipeline: ["rustc", "LLVM", "native binary"],
        artifacts: [".rlib", "static/dynamic libs", "bin"],
        buildSystem: "cargo"
    },
    performance: {
        latency: "Low runtime overhead; fast startup",
        throughput: "High for CPU-bound workloads",
        notes: ["Zero-cost abstractions", "Predictable memory"]
    },
    ffi: {
        c: ["extern \"C\"", "bindgen"],
        cpp: ["cxx", "autocxx"],
        wasm: ["wasm-bindgen", "wasm32-unknown-unknown"]
    }
};
