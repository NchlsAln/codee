"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureEcosystem = void 0;
exports.clojureEcosystem = {
    fileExtensions: [".clj", ".cljs", ".cljc", ".edn"],
    paradigms: ["functional", "lisp"],
    packageManagers: ["Leiningen", "Clojure CLI"],
    buildTools: ["Leiningen", "tools.deps"],
    testing: ["clojure.test", "Kaocha"],
    integrationTesting: ["Kaocha"],
    linting: ["clj-kondo", "Eastwood"],
    formatting: ["cljfmt", "zprint"],
    typeChecking: ["core.typed", "clojure.spec"],
    docs: ["codox"],
    ciCd: ["GitHub Actions", "CircleCI"],
    deploymentTargets: ["JARs", "containers", "serverless"],
    runtimes: ["JVM", "ClojureScript"],
    frameworks: ["Ring", "Compojure", "Reitit"],
    packageIndex: "Clojars, Maven",
    observability: ["tools.logging", "OpenTelemetry"]
};
