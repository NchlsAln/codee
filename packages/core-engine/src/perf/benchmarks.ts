import { writeFile } from "node:fs/promises";
import path from "node:path";
import { ProjectIndex } from "../memory/ProjectIndex";
import { PerformanceMonitor } from "./PerformanceMonitor";
import { createSecureTempDir } from "../security/SecureTemp";

async function runIndexBenchmark(): Promise<void> {
  const monitor = new PerformanceMonitor({ maxEntries: 100 });
  const tempDir = await createSecureTempDir("codee-bench-");

  try {
    const files = Array.from({ length: 200 }, (_, index) => {
      const filePath = path.join(tempDir.path, `file-${index}.ts`);
      return writeFile(filePath, `export const value${index} = ${index};\n`);
    });
    await Promise.all(files);

    const index = new ProjectIndex();
    const stop = monitor.startSpan("benchmark.index.scan");
    await index.scan(tempDir.path);
    stop();

    const metrics = monitor.snapshot();
    const scanMetric = metrics.find((metric) => metric.name === "benchmark.index.scan");
    const duration = scanMetric?.value ?? 0;
    process.stdout.write(`ProjectIndex scan (200 files): ${Math.round(duration)}ms\n`);
  } finally {
    await tempDir.cleanup();
  }
}

runIndexBenchmark().catch((error) => {
  process.stderr.write(`Benchmark failed: ${String(error)}\n`);
  process.exit(1);
});
