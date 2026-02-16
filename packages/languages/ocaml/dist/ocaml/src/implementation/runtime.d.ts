export declare const ocamlRuntime: {
    name: string;
    supportedVersions: string[];
    memoryModel: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        domains: string;
        async: string;
        threads: string;
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
