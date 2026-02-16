"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellRuntime = void 0;
exports.powershellRuntime = {
    name: "PowerShell (pwsh)",
    supportedVersions: ["7.2", "7.4"],
    memoryModel: {
        stack: ".NET call stack with PowerShell AST execution",
        heap: "Managed .NET heap for objects and pipeline data",
        gc: ".NET generational garbage collector",
        ownership: "Reference types with garbage collection"
    },
    concurrencyModel: {
        async: "Jobs, runspaces, and thread jobs",
        pipelines: "Object pipeline between cmdlets",
        remoting: "PowerShell remoting over WSMan/SSH",
        scheduling: "Scheduled tasks and background jobs"
    },
    compilation: {
        pipeline: ["parse", "AST", "scriptblock execution"],
        artifacts: [".ps1", ".psm1", ".psd1"],
        alternatives: ["Windows PowerShell 5.1"]
    },
    performance: {
        latency: "Moderate startup; optimized for automation",
        throughput: "Great for IO and administration; avoid heavy loops",
        notes: ["Prefer pipeline cmdlets", "Use .NET for tight loops", "Avoid unnecessary formatters"]
    },
    ffi: {
        dotnet: [".NET assemblies", "Add-Type", "C# inline"],
        native: ["cmd.exe", "WMI", "COM"],
        rest: ["Invoke-RestMethod", "Invoke-WebRequest"]
    }
};
