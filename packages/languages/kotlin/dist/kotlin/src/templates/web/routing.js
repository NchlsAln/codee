"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
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
