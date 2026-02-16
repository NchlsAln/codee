"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureEcosystem = void 0;
exports.clojureEcosystem = {
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
