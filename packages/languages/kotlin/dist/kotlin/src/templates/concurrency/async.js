"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
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
