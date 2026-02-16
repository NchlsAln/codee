"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonRuntime = void 0;
exports.pythonRuntime = {
    name: "CPython",
    supportedVersions: ["3.10", "3.11", "3.12", "3.13"],
    memoryModel: {
        stack: "C stack with Python frame objects",
        heap: "Reference-counted objects on a managed heap",
        gc: "Cyclic garbage collector for container cycles",
        ownership: "Shared references with refcounts; no ownership types"
    },
    concurrencyModel: {
        threading: "OS threads with the GIL in CPython",
        async: "asyncio event loop with tasks, awaitables, and task groups",
        multiprocessing: "Process-based parallelism via multiprocessing",
        native: "Subinterpreters are experimental for isolation"
    },
    compilation: {
        pipeline: ["parse", "bytecode", "interpret"],
        artifacts: ["pyc", "__pycache__"],
        alternativeRuntimes: ["PyPy (JIT)", "GraalPy", "MicroPython"]
    },
    performance: {
        latency: "Moderate startup; fast enough for services",
        throughput: "Strong for IO-bound work; CPU-bound limited by the GIL",
        notes: ["Use native extensions", "Vectorize with NumPy", "Use multiprocessing"]
    },
    ffi: {
        c: ["ctypes", "cffi", "CPython C-API"],
        native: ["Cython", "pybind11", "maturin/pyo3"],
        wasm: ["Pyodide", "wasmtime embedding"]
    }
};
