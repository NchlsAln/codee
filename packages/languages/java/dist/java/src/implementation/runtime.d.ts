export declare const javaRuntime: {
    name: string;
    toolchain: string;
    runtime: string;
    memoryModel: string;
    asyncModel: string;
    memoryDetails: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        threading: string;
        async: string;
        parallel: string;
        synchronization: string;
    };
    compilation: {
        pipeline: string[];
        artifacts: string[];
        runtimeProfiles: string[];
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
