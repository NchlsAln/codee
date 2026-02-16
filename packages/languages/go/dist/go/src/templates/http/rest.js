"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return "package main\n\nimport (\n  \"bytes\"\n  \"net/http\"\n)\n\nfunc main() {\n  body := bytes.NewBufferString(\"{\\\"name\\\":\\\"widget\\\"}\")\n  _, _ = http.Post(\"https://example.com/items\", \"application/json\", body)\n}\n";
}
