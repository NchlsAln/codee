"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return [
        "import akka.http.scaladsl.server.Directives._",
        "import akka.http.scaladsl.model.headers.RawHeader",
        "",
        "val withRequestId = mapResponseHeaders { headers =>",
        "  RawHeader(\"X-Request-Id\", java.util.UUID.randomUUID().toString) :: headers",
        "}",
        "",
        "val route = withRequestId { complete(\"ok\") }"
    ].join("\n");
}
