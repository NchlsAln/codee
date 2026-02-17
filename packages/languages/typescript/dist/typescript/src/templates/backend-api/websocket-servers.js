"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketServersTemplate = websocketServersTemplate;
function websocketServersTemplate() {
  return [
    "import { WebSocketServer } from 'ws';",
    "",
    "const wss = new WebSocketServer({ port: 8080 });",
    "wss.on('connection', (ws) => {",
    "  ws.send('ready');",
    "  ws.on('message', (msg) => ws.send(`echo:${msg}`));",
    "});",
    "",
    "// Socket.io alternative",
    "// import { Server } from 'socket.io';",
  ].join("\n");
}
