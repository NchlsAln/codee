export function httpRestTemplate(): string {
  return [
    "import akka.http.scaladsl.server.Directives._",
    "import akka.http.scaladsl.model.StatusCodes",
    "",
    "val route = pathPrefix(\"api\" / \"users\") {",
    "  post { complete(StatusCodes.Created) } ~",
    "  get { complete(\"[]\") }",
    "}"
  ].join("\n");
}
