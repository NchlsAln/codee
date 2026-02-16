"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTemplate = httpTemplate;
function httpTemplate() {
    return [
        "import std/[httpclient, asynchttpserver, asyncdispatch]",
        "let client = newHttpClient()",
        "discard client.getContent(\"https://example.com\")",
        "var server = newAsyncHttpServer()",
        "proc cb(req: Request) {.async.} = await req.respond(Http200, \"ok\")",
        "asyncCheck server.serve(Port(8080), cb)"
    ].join("\n");
}
