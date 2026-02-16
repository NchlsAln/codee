"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasRuntime = void 0;
exports.sasRuntime = {
    name: "SAS runtime",
    supportedVersions: ["9.4", "Viya 4"],
    memoryModel: {
        stack: "Data step execution stacks",
        heap: "WORK library and in-memory tables",
        gc: "Engine-managed memory pools",
        ownership: "Dataset-backed storage with explicit library refs"
    },
    concurrencyModel: {
        async: "Batch and grid execution",
        threads: "Multi-threaded procedures",
        channels: "Task spooling and queues",
        distribution: "SAS Grid and Viya distributed services"
    },
    compilation: {
        pipeline: ["DATA step", "PROC execution", "macro expansion"],
        artifacts: [".sas7bdat", ".sas7bcat"],
        alternatives: ["Stored processes", "CAS actions"]
    },
    performance: {
        latency: "Optimized for batch analytics",
        throughput: "High for structured data processing",
        notes: ["Use WHERE for early filtering", "Avoid unnecessary sort", "Use indexes and formats"]
    },
    ffi: {
        c: ["SAS/IML", "C extensions"],
        native: ["DS2", "FCMP"],
        wasm: ["Not applicable"]
    }
};
