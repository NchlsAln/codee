export function benchmarkTemplate(): string {
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
