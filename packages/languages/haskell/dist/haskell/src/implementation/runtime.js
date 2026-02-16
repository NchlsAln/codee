"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellRuntime = void 0;
exports.haskellRuntime = {
    runtimeModel: "GHC runtime with lazy evaluation, STG machine, and GC.",
    packageManager: "Stack or Cabal",
    lspServer: "haskell-language-server",
    executionModel: ["native", "bytecode"]
};
