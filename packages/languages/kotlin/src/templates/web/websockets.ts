export function websocketsTemplate(): string {
  return [
    "import io.ktor.server.application.*",
    "import io.ktor.server.websocket.*",
    "import io.ktor.websocket.*",
    "",
    "fun Application.module() {",
    "  install(WebSockets)",
    "  routing {",
    "    webSocket(\"/ws\") {",
    "      for (frame in incoming) {",
    "        if (frame is Frame.Text) send(Frame.Text(\"echo: ${'$'}{frame.readText()}\"))",
    "      }",
    "    }",
    "  }",
    "}"
  ].join("\n");
}
