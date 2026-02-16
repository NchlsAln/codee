"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return [
        "import io.ktor.server.application.*",
        "import io.ktor.server.plugins.*",
        "import io.ktor.server.response.*",
        "",
        "fun Application.module() {",
        "  install(CallId) {",
        "    header(\"x-request-id\")",
        "    generate { java.util.UUID.randomUUID().toString() }",
        "  }",
        "  intercept(ApplicationCallPipeline.Plugins) {",
        "    call.response.headers.append(\"x-request-id\", call.callId ?: \"n/a\")",
        "  }",
        "}"
    ].join("\n");
}
