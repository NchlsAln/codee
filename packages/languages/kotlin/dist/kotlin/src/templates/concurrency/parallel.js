"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return [
        "import kotlinx.coroutines.Dispatchers",
        "import kotlinx.coroutines.awaitAll",
        "import kotlinx.coroutines.coroutineScope",
        "import kotlinx.coroutines.async",
        "import kotlinx.coroutines.runBlocking",
        "",
        "fun main() = runBlocking {",
        "  val results = coroutineScope {",
        "    listOf(1, 2, 3).map { value -> async(Dispatchers.Default) { value * value } }.awaitAll()",
        "  }",
        "  println(results)",
        "}"
    ].join("\n");
}
