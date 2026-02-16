"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "import { WebSocketServer } from 'ws';",
        "",
        "const wss = new WebSocketServer({ port: 8080 });",
        "",
        "wss.on('connection', (socket) => {",
        "  socket.on('message', (data) => {",
        "    socket.send(`echo: ${data.toString()}`);",
        "  });",
        "});"
    ].join("\n");
}
