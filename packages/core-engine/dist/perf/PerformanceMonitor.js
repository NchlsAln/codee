"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceMonitor = void 0;
const node_perf_hooks_1 = require("node:perf_hooks");
class PerformanceMonitor {
    metrics = [];
    maxEntries;
    enabled = true;
    constructor(options) {
        this.maxEntries = options?.maxEntries ?? 2000;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    startSpan(name, meta) {
        if (!this.enabled) {
            return () => undefined;
        }
        const start = node_perf_hooks_1.performance.now();
        node_perf_hooks_1.performance.mark(`${name}.start`);
        return () => this.recordDuration(name, start, meta);
    }
    recordDuration(name, start, meta) {
        if (!this.enabled) {
            return;
        }
        const duration = node_perf_hooks_1.performance.now() - start;
        node_perf_hooks_1.performance.mark(`${name}.end`);
        try {
            node_perf_hooks_1.performance.measure(name, `${name}.start`, `${name}.end`);
        }
        catch {
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
    recordMemory(name, meta) {
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
    snapshot() {
        return [...this.metrics];
    }
    push(metric) {
        this.metrics.push(metric);
        if (this.metrics.length > this.maxEntries) {
            this.metrics.splice(0, this.metrics.length - this.maxEntries);
        }
    }
}
exports.PerformanceMonitor = PerformanceMonitor;
