export declare const swiftRuntime: {
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
        tasks: string;
        actors: string;
        streams: string;
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
        c: string[];
        objc: string[];
        wasm: string[];
    };
};
