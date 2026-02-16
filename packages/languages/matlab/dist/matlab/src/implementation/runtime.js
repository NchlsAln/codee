"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabRuntime = void 0;
exports.matlabRuntime = {
    name: "MATLAB runtime",
    supportedVersions: ["R2023b", "R2024a"],
    memoryModel: {
        stack: "Function stack frames with copy-on-write arrays",
        heap: "Managed arrays and objects in heap",
        gc: "Reference counting with copy-on-write semantics",
        ownership: "Value semantics for arrays; handle classes for mutable state"
    },
    concurrencyModel: {
        async: "parfeval and backgroundPool",
        threads: "Parallel Computing Toolbox threads",
        channels: "DataQueue and PollableDataQueue",
        distribution: "Parallel Server for clusters"
    },
    compilation: {
        pipeline: ["MATLAB source", "JIT", "native libs"],
        artifacts: [".m", ".mlx"],
        alternatives: ["MATLAB Coder", "Simulink code generation"]
    },
    performance: {
        latency: "Interactive with JIT acceleration",
        throughput: "High for vectorized matrix ops",
        notes: ["Preallocate arrays", "Avoid growing arrays in loops", "Use built-in vectorized funcs"]
    },
    ffi: {
        c: ["MEX", "loadlibrary"],
        native: ["MATLAB Coder"],
        wasm: ["MATLAB Web App Server (limited)"]
    }
};
