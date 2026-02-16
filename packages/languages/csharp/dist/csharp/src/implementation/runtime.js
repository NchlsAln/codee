"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpRuntime = void 0;
exports.csharpRuntime = {
    runtimeModel: ".NET CLR with JIT, optional AOT compilation via NativeAOT.",
    packageManager: "NuGet via dotnet CLI",
    lspServer: "omnisharp",
    compilationTargets: ["il", "native"],
    memoryModel: {
        stack: "Managed stack for method frames",
        heap: "Managed heap with GC",
        gc: "Generational GC",
        ownership: "Shared references; no ownership types"
    },
    concurrencyModel: {
        tasks: "Task/ValueTask with async/await",
        threading: "ThreadPool and async IO",
        actors: "Akka.NET or Orleans",
        channels: "System.Threading.Channels"
    },
    compilation: {
        pipeline: ["csc", "IL", "JIT/AOT"],
        artifacts: [".dll", ".exe"],
        toolchains: ["dotnet", "msbuild", "NativeAOT"]
    },
    performance: {
        latency: "Moderate startup; improved with ReadyToRun/AOT",
        throughput: "High for long-running services",
        notes: ["Use Span<T> for hot paths", "Avoid excessive allocations"]
    },
    ffi: {
        native: ["P/Invoke", "NativeLibrary"],
        wasm: ["JSImport", "Blazor WASM"],
        com: ["COM interop"]
    }
};
