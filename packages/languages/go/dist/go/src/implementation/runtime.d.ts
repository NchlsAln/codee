export declare const goRuntime: {
    name: string;
    toolchain: string;
    moduleSystem: string;
    asyncModel: string;
    memoryModel: string;
    concurrencyPrimitives: string[];
    compilation: {
        pipeline: string[];
        artifacts: string[];
        crossCompilation: string;
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
