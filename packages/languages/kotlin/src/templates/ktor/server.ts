export function ktorServerTemplate(): string {
  return [
    "import io.ktor.application.*",
    "import io.ktor.http.*",
    "import io.ktor.response.*",
    "import io.ktor.routing.*",
    "",
    "fun Application.module() {",
    "  routing {",
    "    get(\"/health\") {",
    "      call.respondText(\"ok\", ContentType.Text.Plain)",
    "    }",
    "  }",
    "}"
  ].join("\n");
}
