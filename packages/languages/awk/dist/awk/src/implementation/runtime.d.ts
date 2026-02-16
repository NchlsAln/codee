export declare const awkRuntime: {
    name: string;
    supportedVersions: string[];
    memoryModel: {
        stack: string;
        heap: string;
        gc: string;
        ownership: string;
    };
    concurrencyModel: {
        async: string;
        pipelines: string;
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
        shell: string[];
        native: string[];
    };
};
