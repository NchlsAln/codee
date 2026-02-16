"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "const response = await fetch('https://example.com/health');",
        "const data = await response.json();",
        "",
        "console.log(data);"
    ].join("\n");
}
