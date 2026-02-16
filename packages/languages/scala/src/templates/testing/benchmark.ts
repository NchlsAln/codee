export function benchmarkTemplate(): string {
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
