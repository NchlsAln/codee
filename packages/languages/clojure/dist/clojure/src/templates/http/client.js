"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "(require '[clj-http.client :as http])",
        "(def resp (http/get \"https://api.example.com/health\"))",
        "(println (:status resp))"
    ].join("\n");
}
