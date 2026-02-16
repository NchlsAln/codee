"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "import requests",
        "",
        "response = requests.post('https://example.com/items', json={\"name\": \"widget\"}, timeout=5)",
        "print(response.status_code)"
    ].join("\n");
}
