"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkRuntime = void 0;
exports.awkRuntime = {
    name: "GNU awk (gawk)",
    supportedVersions: ["5.2"],
    memoryModel: {
        stack: "Interpreter call stack for user-defined functions",
        heap: "Associative arrays and variables in interpreter-managed memory",
        gc: "Automatic memory management by the interpreter",
        ownership: "Implicit; values are copied on assignment"
    },
    concurrencyModel: {
        async: "None; single-threaded stream processing",
        pipelines: "Use shell pipelines to parallelize",
        distribution: "Split input and aggregate externally"
    },
    compilation: {
        pipeline: ["awk script", "parse", "interpret"],
        artifacts: [".awk"],
        alternatives: ["mawk", "nawk", "busybox awk"]
    },
    performance: {
        latency: "Very low startup",
        throughput: "Strong for streaming text and logs",
        notes: ["Prefer one-pass scans", "Avoid nested loops on large inputs"]
    },
    ffi: {
        shell: ["pipes", "system()", "getline from command"],
        native: ["external commands via | and system()"]
    }
};
