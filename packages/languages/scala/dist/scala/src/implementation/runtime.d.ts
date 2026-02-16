export declare const scalaRuntime: {
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
        futures: string;
        actors: string;
        effects: string;
        streaming: string;
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
        jvm: string[];
        native: string[];
        wasm: string[];
    };
};
