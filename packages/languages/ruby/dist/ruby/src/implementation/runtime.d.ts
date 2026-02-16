export declare const rubyRuntime: {
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
        fibers: string;
        background: string;
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
