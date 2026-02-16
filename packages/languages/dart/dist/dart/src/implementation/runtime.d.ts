export declare const dartRuntime: {
    runtimeModel: string;
    packageManager: string;
    lspServer: string;
    compilationTargets: string[];
    memoryModel: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        asyncAwait: string;
        isolates: string;
        streams: string;
        eventLoop: string;
    };
    compilation: {
        pipeline: string[];
        artifacts: string[];
        toolchains: string[];
    };
    performance: {
        latency: string;
        throughput: string;
        notes: string[];
    };
    ffi: {
        native: string[];
        wasm: string[];
        platform: string[];
    };
};
