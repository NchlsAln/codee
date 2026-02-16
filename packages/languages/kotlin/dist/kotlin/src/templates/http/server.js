"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "import io.ktor.server.engine.*",
        "import io.ktor.server.netty.*",
        "import io.ktor.server.routing.*",
        "import io.ktor.server.application.*",
        "import io.ktor.server.response.*",
        "",
        "fun main() {",
        "  embeddedServer(Netty, port = 8080) {",
        "    routing { get(\"/health\") { call.respondText(\"ok\") } }",
        "  }.start(wait = true)",
        "}"
    ].join("\n");
}
