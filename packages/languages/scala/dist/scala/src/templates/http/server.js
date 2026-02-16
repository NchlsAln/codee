"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "import akka.http.scaladsl.Http",
        "import akka.http.scaladsl.server.Directives._",
        "import scala.concurrent.ExecutionContext",
        "",
        "implicit val ec: ExecutionContext = ExecutionContext.global",
        "val route = path(\"health\") { get { complete(\"ok\") } }",
        "Http().newServerAt(\"0.0.0.0\", 8080).bind(route)"
    ].join("\n");
}
