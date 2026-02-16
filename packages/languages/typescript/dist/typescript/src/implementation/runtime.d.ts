export declare const typescriptRuntime: {
    name: string;
    supportedRuntimes: string[];
    moduleSystems: string[];
    memoryModel: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        async: string;
        threading: string;
        processes: string;
        syncPrimitives: string;
    };
    compilation: {
        pipeline: string[];
        artifacts: string[];
        bundlers: string[];
    };
    performance: {
        latency: string;
        throughput: string;
        notes: string[];
    };
    ffi: {
        native: string[];
        wasm: string[];
        interop: string[];
    };
};
