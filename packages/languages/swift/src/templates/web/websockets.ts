export function websocketsTemplate(): string {
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
