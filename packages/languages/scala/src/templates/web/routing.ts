export function routingTemplate(): string {
  return [
    "import akka.http.scaladsl.server.Directives._",
    "",
    "val route =",
    "  path(\"health\") {",
    "    get { complete(\"ok\") }",
    "  } ~",
    "  pathPrefix(\"users\") {",
    "    path(IntNumber) { id => complete(s\"user:$id\") }",
    "  }"
  ].join("\n");
}
