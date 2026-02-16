"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedRuntime = void 0;
exports.sedRuntime = {
    name: "GNU sed",
    supportedVersions: ["4.9"],
    memoryModel: {
        stack: "Command execution stack for script blocks",
        heap: "Pattern space and hold space buffers",
        gc: "None; buffers reused per line",
        ownership: "Line-based buffers overwritten each cycle"
    },
    concurrencyModel: {
        async: "None; single-threaded stream editor",
        pipelines: "Parallelize via shell pipelines",
        distribution: "Split input and merge outputs externally"
    },
    compilation: {
        pipeline: ["sed script", "parse", "execute"],
        artifacts: [".sed"],
        alternatives: ["BSD sed", "busybox sed"]
    },
    performance: {
        latency: "Very low startup",
        throughput: "Excellent for streaming text transformations",
        notes: ["Prefer simple substitutions", "Avoid complex multi-line scripts"]
    },
    ffi: {
        shell: ["pipes", "xargs", "process substitution"],
        native: ["external commands via pipelines"]
    }
};
