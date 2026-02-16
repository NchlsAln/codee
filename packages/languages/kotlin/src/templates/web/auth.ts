export function authTemplate(): string {
  return [
    "import io.ktor.server.application.*",
    "import io.ktor.server.auth.*",
    "import io.ktor.server.response.*",
    "",
    "fun Application.module() {",
    "  install(Authentication) {",
    "    bearer {",
    "      authenticate { credential ->",
    "        if (credential.token == \"secret\") UserIdPrincipal(\"user\") else null",
    "      }",
    "    }",
    "  }",
    "  authenticate {",
    "    get(\"/secure\") { call.respondText(\"ok\") }",
    "  }",
    "}"
  ].join("\n");
}
