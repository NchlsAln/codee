export const pythonRuntime = {
  name: "CPython",
  supportedVersions: ["3.10", "3.11", "3.12", "3.13"],
  internals: {
    gil: "Global Interpreter Lock serializes bytecode execution; released in IO and some C extensions",
    refCounting: "Immediate refcount updates with cycle GC for container graphs",
    memoryPools: "pymalloc arenas/pools for small objects; system malloc for larger blocks",
  },
  asyncRuntime: {
    eventLoop: "asyncio event loop with tasks, futures, and task groups",
    alternatives: ["uvloop", "trio", "anyio"],
    notes: ["Prefer structured concurrency", "Avoid blocking calls in the loop"],
  },
  subinterpreters: {
    pep: "PEP 554 (draft)",
    isolation: "Per-interpreter GIL and module state isolation",
    sharing: "Limited shared memory; use queues or shared buffers",
  },
  profiles: {
    cpython: "Baseline interpreter, fastest ecosystem support",
    pypy: "JIT improves long-running CPU workloads, some C-API gaps",
    cython: "Ahead-of-time compiled extensions for hot paths",
    numba: "JIT for numeric kernels and array-heavy code",
  },
  python312Plus: {
    perf: "Perf profiler hooks and specialized bytecode",
    errors: "Improved error messages and location ranges",
    typing: "Type parameters syntax and enhanced generics",
  },
  memoryModel: {
    stack: "C stack with Python frame objects",
    heap: "Reference-counted objects on a managed heap",
    gc: "Cyclic garbage collector for container cycles",
    ownership: "Shared references with refcounts; no ownership types",
  },
  concurrencyModel: {
    threading: "OS threads with the GIL in CPython",
    async: "asyncio event loop with tasks, awaitables, and task groups",
    multiprocessing: "Process-based parallelism via multiprocessing",
    native: "Subinterpreters are experimental for isolation",
  },
  compilation: {
    pipeline: ["parse", "bytecode", "interpret"],
    artifacts: ["pyc", "__pycache__"],
    alternativeRuntimes: ["PyPy (JIT)", "GraalPy", "MicroPython"],
  },
  performance: {
    latency: "Moderate startup; fast enough for services",
    throughput: "Strong for IO-bound work; CPU-bound limited by the GIL",
    notes: [
      "Use native extensions",
      "Vectorize with NumPy",
      "Use multiprocessing",
      "Profile with py-spy or perf",
      "Prefer PyPy for long-running CPU workloads",
    ],
  },
  ffi: {
    c: ["ctypes", "cffi", "CPython C-API"],
    native: ["Cython", "pybind11", "maturin/pyo3"],
    wasm: ["Pyodide", "wasmtime embedding"],
  },
};
