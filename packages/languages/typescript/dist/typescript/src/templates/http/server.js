"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "import { createServer } from 'node:http';",
        "",
        "const server = createServer((_req, res) => {",
        "  res.writeHead(200, { 'content-type': 'application/json' });",
        "  res.end(JSON.stringify({ ok: true }));",
        "});",
        "",
        "server.listen(8080);"
    ].join("\n");
}
