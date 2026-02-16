"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return [
        "(require '[cheshire.core :as json])",
        "(def payload {:id 1 :name \"Ada\"})",
        "(def encoded (json/generate-string payload))",
        "(def decoded (json/parse-string encoded true))",
        "(println decoded)"
    ].join("\n");
}
