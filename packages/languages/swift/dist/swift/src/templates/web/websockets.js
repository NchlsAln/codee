"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "import Vapor",
        "",
        "app.webSocket(\"ws\") { req, ws in",
        "  ws.onText { ws, text in",
        "    ws.send(\"echo:\\(text)\")",
        "  }",
        "}"
    ].join("\n");
}
