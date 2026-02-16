export function routingTemplate(): string {
  return [
    "import io.ktor.server.routing.*",
    "import io.ktor.server.application.*",
    "import io.ktor.server.response.*",
    "",
    "fun Application.module() {",
    "  routing {",
    "    get(\"/items/{id}\") {",
    "      call.respondText(call.parameters[\"id\"] ?: \"missing\")",
    "    }",
    "  }",
    "}"
  ].join("\n");
}
