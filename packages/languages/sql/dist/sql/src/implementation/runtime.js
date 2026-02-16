"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlRuntime = void 0;
exports.sqlRuntime = {
    name: "SQL engines",
    supportedVersions: ["PostgreSQL 14+", "MySQL 8+", "SQLite 3+", "SQL Server 2019+"],
    memoryModel: {
        stack: "Engine-managed query execution stacks",
        heap: "Buffer pools and temp workspaces",
        gc: "Engine-specific memory management",
        ownership: "Managed by the database engine"
    },
    concurrencyModel: {
        async: "Connection pooling and async drivers",
        threads: "Engine worker threads",
        channels: "Not applicable",
        distribution: "Sharding and replicas via engine features"
    },
    compilation: {
        pipeline: ["SQL parse", "logical plan", "physical plan", "execution"],
        artifacts: ["query plans"],
        alternatives: ["prepared statements", "stored procedures"]
    },
    performance: {
        latency: "Optimized by indexes and caching",
        throughput: "High for set-based operations",
        notes: ["Use indexes", "Avoid SELECT *", "Inspect EXPLAIN plans"]
    },
    ffi: {
        c: ["UDFs", "extensions"],
        native: ["stored procedures"],
        wasm: ["engine-specific"]
    }
};
