"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "(require '[clojure.edn :as edn])",
        "(def config (edn/read-string (slurp \"config.edn\")))",
        "(println config)"
    ].join("\n");
}
