export function websocketsTemplate(): string {
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
