"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "{:ok, response} = Req.get(\"https://api.example.com/health\")",
        "IO.inspect(response.status)"
    ].join("\n");
}
