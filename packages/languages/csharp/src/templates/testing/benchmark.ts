export function benchmarkTemplate(): string {
  return [
    "using BenchmarkDotNet.Attributes;",
    "using BenchmarkDotNet.Running;",
    "",
    "public class SortBench {",
    "  [Benchmark]",
    "  public int[] Sort() => new[] { 3, 1, 2 }.OrderBy(x => x).ToArray();",
    "}",
    "",
    "BenchmarkRunner.Run<SortBench>();"
  ].join("\n");
}
