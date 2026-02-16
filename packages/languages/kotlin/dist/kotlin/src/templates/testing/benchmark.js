"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkTemplate = benchmarkTemplate;
function benchmarkTemplate() {
    return [
        "import org.openjdk.jmh.annotations.Benchmark",
        "",
        "class Benchmarks {",
        "  @Benchmark",
        "  fun square(): Int {",
        "    var sum = 0",
        "    for (i in 0 until 1000) sum += i * i",
        "    return sum",
        "  }",
        "}"
    ].join("\n");
}
