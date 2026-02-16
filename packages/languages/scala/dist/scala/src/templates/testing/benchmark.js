"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkTemplate = benchmarkTemplate;
function benchmarkTemplate() {
    return [
        "import org.openjdk.jmh.annotations._",
        "import java.util.concurrent.TimeUnit",
        "",
        "@BenchmarkMode(Array(Mode.AverageTime))",
        "@OutputTimeUnit(TimeUnit.MILLISECONDS)",
        "class SortBench {",
        "  @Benchmark",
        "  def sort: List[Int] = List(3, 1, 2).sorted",
        "}"
    ].join("\n");
}
