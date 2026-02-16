"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlRuntime = void 0;
exports.ocamlRuntime = {
    name: "OCaml runtime",
    supportedVersions: ["5.1", "5.2"],
    memoryModel: {
        stack: "Lightweight stack frames with tail-call optimization",
        heap: "Generational heap with minor/major collections",
        gc: "Incremental, generational GC",
        ownership: "Immutable-by-default with explicit mutation"
    },
    concurrencyModel: {
        domains: "Multicore domains for parallelism",
        async: "Lwt/Async for cooperative IO",
        threads: "System threads with Domainslib",
        distribution: "Library-based message passing"
    },
    compilation: {
        pipeline: ["OCaml AST", "lambda/bytecode", "native code"],
        artifacts: [".cmo", ".cma", ".cmx", "native binaries"],
        alternatives: ["bytecode via ocamlc", "native via ocamlopt"]
    },
    performance: {
        latency: "Low overhead with native compilation",
        throughput: "Strong for CPU-bound functional workloads",
        notes: ["Prefer tail recursion", "Avoid excessive allocations in hot loops"]
    },
    ffi: {
        c: ["ctypes", "C stubs"],
        native: ["Dune foreign stubs"],
        wasm: ["js_of_ocaml", "wasm-of-ocaml"]
    }
};
