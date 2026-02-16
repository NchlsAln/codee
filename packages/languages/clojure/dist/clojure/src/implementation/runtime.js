"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureRuntime = void 0;
exports.clojureRuntime = {
    runtimeModel: "JVM with persistent data structures, immutability by default, and GC; STM via refs/atoms/agents.",
    packageManager: "Leiningen, tools.deps (deps.edn)",
    lspServer: "clojure-lsp",
    executionModel: ["jvm", "repl"]
};
