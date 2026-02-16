export declare const haskellRuntime: {
    name: string;
    supportedVersions: string[];
    memoryModel: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        threads: string;
        stm: string;
        async: string;
        distribution: string;
    };
    compilation: {
        pipeline: string[];
        artifacts: string[];
        alternatives: string[];
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
