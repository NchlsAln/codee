"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return [
        "(require '[clojure.string :as str])",
        "(def name \"Ada\")",
        "(println (str/upper-case name))",
        "(println (str/join \"-\" [\"a\" \"b\"]))"
    ].join("\n");
}
