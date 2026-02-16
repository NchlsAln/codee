export function benchmarkTemplate(): string {
  return "import org.openjdk.jmh.annotations.Benchmark;\n\npublic class Benchmarks {\n  @Benchmark\n  public int square() {\n    int sum = 0;\n    for (int i = 0; i < 1000; i++) {\n      sum += i * i;\n    }\n    return sum;\n  }\n}\n";
}
