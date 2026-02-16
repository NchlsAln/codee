export declare const pythonRuntime: {
    name: string;
    supportedVersions: string[];
    memoryModel: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        threading: string;
        async: string;
        multiprocessing: string;
        native: string;
    };
    compilation: {
        pipeline: string[];
        artifacts: string[];
        alternativeRuntimes: string[];
    };
    performance: {
        latency: string;
        throughput: string;
        notes: string[];
    };
    ffi: {
        c: string[];
        native: string[];
        wasm: string[];
    };
};
