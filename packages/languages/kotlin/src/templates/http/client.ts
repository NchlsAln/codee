export function httpClientTemplate(): string {
  return [
    "import io.ktor.client.*",
    "import io.ktor.client.request.*",
    "import io.ktor.client.statement.*",
    "import kotlinx.coroutines.runBlocking",
    "",
    "fun main() = runBlocking {",
    "  val client = HttpClient()",
    "  val response: HttpResponse = client.get(\"https://example.com/health\")",
    "  println(response.status)",
    "  client.close()",
    "}"
  ].join("\n");
}
