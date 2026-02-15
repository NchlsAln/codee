import { performance } from "node:perf_hooks";

export type PerformanceMetric = {
  name: string;
  type: "duration" | "gauge";
  value: number;
  unit: "ms" | "bytes";
  timestamp: number;
  meta?: Record<string, string | number | boolean>;
};

export class PerformanceMonitor {
  private readonly metrics: PerformanceMetric[] = [];
  private readonly maxEntries: number;
  private enabled = true;

  constructor(options?: { maxEntries?: number }) {
    this.maxEntries = options?.maxEntries ?? 2000;
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  startSpan(name: string, meta?: PerformanceMetric["meta"]): () => void {
    if (!this.enabled) {
      return () => undefined;
    }
    const start = performance.now();
    performance.mark(`${name}.start`);
    return () => this.recordDuration(name, start, meta);
  }

  recordDuration(name: string, start: number, meta?: PerformanceMetric["meta"]): void {
    if (!this.enabled) {
      return;
    }
    const duration = performance.now() - start;
    performance.mark(`${name}.end`);
    try {
      performance.measure(name, `${name}.start`, `${name}.end`);
    } catch {
      // Ignore missing marks or duplicate names.
    }
    this.push({
      name,
      type: "duration",
      value: Math.max(0, duration),
      unit: "ms",
      timestamp: Date.now(),
      meta
    });
  }

  recordMemory(name: string, meta?: PerformanceMetric["meta"]): void {
    if (!this.enabled) {
      return;
    }
    const rss = process.memoryUsage().rss;
    this.push({
      name,
      type: "gauge",
      value: rss,
      unit: "bytes",
      timestamp: Date.now(),
      meta
    });
  }

  snapshot(): PerformanceMetric[] {
    return [...this.metrics];
  }

  private push(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    if (this.metrics.length > this.maxEntries) {
      this.metrics.splice(0, this.metrics.length - this.maxEntries);
    }
  }
}
