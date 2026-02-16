export declare const rustRuntime: {
    name: string;
    editions: string[];
    memoryModel: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        threading: string;
        async: string;
        messaging: string;
        parallel: string;
    };
    compilation: {
        pipeline: string[];
        artifacts: string[];
        buildSystem: string;
    };
    performance: {
        latency: string;
        throughput: string;
        notes: string[];
    };
    ffi: {
        c: string[];
        cpp: string[];
        wasm: string[];
    };
};
