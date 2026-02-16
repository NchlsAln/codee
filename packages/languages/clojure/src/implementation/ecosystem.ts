export const clojureEcosystem = {
  fileExtensions: [
    ".clj",
    ".cljs",
    ".cljc",
    ".edn"
  ],
  paradigms: [
    "functional",
    "lisp"
  ],
  tooling: ["leiningen", "tools.deps", "clojure-lsp", "clj-kondo", "eastwood", "kaocha"],
  frameworks: ["ring", "compojure", "reitit"],
  packageIndex: "clojars,maven"
};
