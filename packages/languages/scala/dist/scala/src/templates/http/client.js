"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "import sttp.client3._",
        "",
        "val backend = HttpURLConnectionBackend()",
        "val request = basicRequest.get(uri\"https://example.com/health\")",
        "val response = request.send(backend)",
        "println(response.code)"
    ].join("\n");
}
