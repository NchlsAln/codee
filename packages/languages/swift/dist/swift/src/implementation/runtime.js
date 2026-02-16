"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftRuntime = void 0;
exports.swiftRuntime = {
    runtimeModel: "Ahead-of-time native compilation with ARC-managed memory.",
    packageManager: "Swift Package Manager (SPM), CocoaPods",
    lspServer: "sourcekit-lsp",
    compilationTargets: ["ios", "macos", "linux", "watchos", "tvos"],
    memoryModel: {
        stack: "Native stack frames",
        heap: "ARC-managed heap",
        gc: "None (ARC)",
        ownership: "Strong/weak/unowned references"
    },
    concurrencyModel: {
        asyncAwait: "Async/await with structured concurrency",
        tasks: "Task and TaskGroup",
        actors: "Actors for isolation",
        streams: "AsyncSequence and AsyncStream"
    },
    compilation: {
        pipeline: ["swiftc", "LLVM IR", "native"],
        artifacts: [".swiftmodule", ".framework", ".app"],
        toolchains: ["swift", "xcodebuild", "swiftpm"]
    },
    performance: {
        latency: "Fast startup with AOT",
        throughput: "High for native apps",
        notes: ["Avoid retain cycles", "Prefer value types"]
    },
    ffi: {
        c: ["Clang modules", "Swift-C interop"],
        objc: ["Objective-C interop"],
        wasm: ["SwiftWasm + JavaScriptKit"]
    }
};
