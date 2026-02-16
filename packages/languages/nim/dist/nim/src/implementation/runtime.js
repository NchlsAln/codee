"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimRuntime = void 0;
exports.nimRuntime = {
    runtimeModel: "Compiles to C/JS/LLVM; GC optional (ARC/ORC); macros and compile-time execution.",
    packageManager: "Nimble",
    lspServer: "nimlangserver",
    executionModel: ["native", "c", "js", "llvm"]
};
