export function httpGraphqlTemplate(): string {
  return [
    "import io.ktor.client.*",
    "import io.ktor.client.request.*",
    "import io.ktor.client.statement.*",
    "import io.ktor.http.*",
    "import kotlinx.coroutines.runBlocking",
    "",
    "fun main() = runBlocking {",
    "  val client = HttpClient()",
    "  val response: HttpResponse = client.post(\"https://example.com/graphql\") {",
    "    contentType(ContentType.Application.Json)",
    "    setBody(\"{\\\"query\\\":\\\"query { health { ok } }\\\"}\")",
    "  }",
    "  println(response.status)",
    "  client.close()",
    "}"
  ].join("\n");
}
