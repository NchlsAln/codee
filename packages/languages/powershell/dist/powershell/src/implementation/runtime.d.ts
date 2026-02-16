export declare const powershellRuntime: {
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
        remoting: string;
        scheduling: string;
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
        dotnet: string[];
        native: string[];
        rest: string[];
    };
};
