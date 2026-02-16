export const clojureRuntime = {
  runtimeModel: "JVM with persistent data structures, immutability by default, and GC; STM via refs/atoms/agents.",
  packageManager: "Leiningen, tools.deps (deps.edn)",
  lspServer: "clojure-lsp",
  executionModel: ["jvm", "repl"]
};
