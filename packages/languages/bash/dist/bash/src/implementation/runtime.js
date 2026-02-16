"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashRuntime = void 0;
exports.bashRuntime = {
    name: "GNU Bash",
    supportedVersions: ["5.1", "5.2"],
    memoryModel: {
        stack: "Call stack for shell functions and subshells",
        heap: "Shell variables, arrays, and environment data in process memory",
        gc: "None; process memory is released on exit",
        ownership: "Forked processes inherit copies of environment variables"
    },
    concurrencyModel: {
        async: "Background jobs with & and wait",
        processes: "Pipelines spawn processes connected by pipes",
        jobControl: "fg/bg/disown for job management",
        coordination: "Use wait, xargs, or GNU parallel for fan-out"
    },
    compilation: {
        pipeline: ["shell script", "parse", "execute"],
        artifacts: [".sh"],
        alternatives: ["dash", "zsh", "ksh", "busybox sh"]
    },
    performance: {
        latency: "Low startup cost but slower for heavy computation",
        throughput: "Bound by process spawning and external commands",
        notes: ["Prefer builtins", "Avoid fork-heavy loops", "Batch with xargs"]
    },
    ffi: {
        native: ["POSIX utilities", "coreutils", "system calls via commands"],
        scripting: ["python", "node", "awk", "sed"],
        wasm: ["WASI runtimes via external tools"]
    }
};
