"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:fs/promises");
const node_path_1 = __importDefault(require("node:path"));
const ProjectIndex_1 = require("../memory/ProjectIndex");
const PerformanceMonitor_1 = require("./PerformanceMonitor");
const SecureTemp_1 = require("../security/SecureTemp");
async function runIndexBenchmark() {
    const monitor = new PerformanceMonitor_1.PerformanceMonitor({ maxEntries: 100 });
    const tempDir = await (0, SecureTemp_1.createSecureTempDir)("codee-bench-");
    try {
        const files = Array.from({ length: 200 }, (_, index) => {
            const filePath = node_path_1.default.join(tempDir.path, `file-${index}.ts`);
            return (0, promises_1.writeFile)(filePath, `export const value${index} = ${index};\n`);
        });
        await Promise.all(files);
        const index = new ProjectIndex_1.ProjectIndex();
        const stop = monitor.startSpan("benchmark.index.scan");
        await index.scan(tempDir.path);
        stop();
        const metrics = monitor.snapshot();
        const scanMetric = metrics.find((metric) => metric.name === "benchmark.index.scan");
        const duration = scanMetric?.value ?? 0;
        process.stdout.write(`ProjectIndex scan (200 files): ${Math.round(duration)}ms\n`);
    }
    finally {
        await tempDir.cleanup();
    }
}
runIndexBenchmark().catch((error) => {
    process.stderr.write(`Benchmark failed: ${String(error)}\n`);
    process.exit(1);
});
