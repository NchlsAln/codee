"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "require 'webrick'",
        "server = WEBrick::HTTPServer.new(Port: 8080)",
        "server.mount_proc('/health') { |_, res| res.body = 'ok' }",
        "server.start"
    ].join("\n");
}
