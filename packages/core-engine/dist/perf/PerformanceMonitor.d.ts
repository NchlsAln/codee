export type PerformanceMetric = {
    name: string;
    type: "duration" | "gauge";
    value: number;
    unit: "ms" | "bytes";
    timestamp: number;
    meta?: Record<string, string | number | boolean>;
};
export declare class PerformanceMonitor {
    private readonly metrics;
    private readonly maxEntries;
    private enabled;
    constructor(options?: {
        maxEntries?: number;
    });
    setEnabled(enabled: boolean): void;
    startSpan(name: string, meta?: PerformanceMetric["meta"]): () => void;
    recordDuration(name: string, start: number, meta?: PerformanceMetric["meta"]): void;
    recordMemory(name: string, meta?: PerformanceMetric["meta"]): void;
    snapshot(): PerformanceMetric[];
    private push;
}
