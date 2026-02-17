export function websocketServersTemplate(): string {
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
