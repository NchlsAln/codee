"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigRuntime = void 0;
exports.zigRuntime = {
    runtimeModel: "LLVM backend with manual memory and explicit allocators; comptime evaluation; no hidden control flow.",
    packageManager: "zig build (builtin), zigmod (community), package manager in development",
    lspServer: "zls",
    executionModel: ["native", "wasm", "freestanding"]
};
