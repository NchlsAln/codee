export function asyncTemplate(): string {
  return [
    "import kotlinx.coroutines.async",
    "import kotlinx.coroutines.runBlocking",
    "",
    "fun main() = runBlocking {",
    "  val deferred = async {",
    "    (1..5).sum()",
    "  }",
    "  println(\"Sum = ${'$'}{deferred.await()}\")",
    "}"
  ].join("\n");
}
