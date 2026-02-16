"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashingTemplate = hashingTemplate;
function hashingTemplate() {
    return [
        "(require '[buddy.core.hash :as hash])",
        "(println (hash/sha256 \"secret\"))"
    ].join("\n");
}
