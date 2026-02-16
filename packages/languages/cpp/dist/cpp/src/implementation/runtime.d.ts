export declare const cppRuntime: {
    name: string;
    toolchain: string;
    runtime: string;
    memoryModel: string;
    asyncModel: string;
    memoryDetails: {
        stack: string;
        heap: string;
        ownership: string;
        gc: string;
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
        toolchains: string[];
    };
    performance: {
        latency: string;
        throughput: string;
        notes: string[];
    };
    ffi: {
        c: string[];
        wasm: string[];
        interop: string[];
    };
};
