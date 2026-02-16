export declare const csharpRuntime: {
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
        tasks: string;
        threading: string;
        actors: string;
        channels: string;
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
        com: string[];
    };
};
