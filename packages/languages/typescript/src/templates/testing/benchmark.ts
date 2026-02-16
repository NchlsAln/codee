export function benchmarkTemplate(): string {
  return [
    "import { Bench } from 'tinybench';",
    "",
    "const bench = new Bench({ time: 100 });",
    "bench.add('array-map', () => Array.from({ length: 1000 }, (_, i) => i * 2));",
    "",
    "await bench.warmup();",
    "await bench.run();",
    "",
    "console.table(bench.table());"
  ].join("\n");
}
