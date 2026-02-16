export const cppRuntime = {
  name: "C++",
  toolchain: "clang++",
  runtime: "native",
  memoryModel: "manual memory with RAII and stack/heap control",
  asyncModel: "std::async, std::thread, coroutines (C++20)",
  memoryDetails: {
    stack: "Automatic storage duration with deterministic destruction",
    heap: "Manual allocation via new/delete or smart pointers",
    ownership: "RAII with unique/shared ownership semantics",
    gc: "No GC; deterministic lifetime"
  },
  concurrencyModel: {
    threading: "std::thread and std::jthread",
    async: "std::async and futures",
    parallel: "std::execution and thread pools",
    synchronization: "mutexes, atomics, condition variables"
  },
  compilation: {
    pipeline: ["compile", "link", "optimize"],
    artifacts: ["static libs", "shared libs", "native binaries"],
    toolchains: ["clang", "gcc", "msvc"]
  },
  performance: {
    latency: "Very low runtime overhead",
    throughput: "High for CPU-bound workloads",
    notes: ["Zero-cost abstractions", "Profile-guided optimization"]
  },
  ffi: {
    c: ["extern \"C\"", "C ABI"],
    wasm: ["Emscripten", "WASI"],
    interop: ["C", "Rust", "Python (pybind11)"]
  }
};
