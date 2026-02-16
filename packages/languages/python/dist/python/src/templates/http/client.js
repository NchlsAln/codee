"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "import httpx",
        "",
        "with httpx.Client(timeout=5) as client:",
        "    response = client.get('https://example.com/health')",
        "    print(response.json())"
    ].join("\n");
}
