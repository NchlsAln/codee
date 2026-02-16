export const goRuntime = {
  name: "Go",
  toolchain: "go",
  moduleSystem: "go mod",
  asyncModel: "goroutines and channels",
  memoryModel: "garbage-collected heap; no ownership/borrowing",
  concurrencyPrimitives: ["goroutine", "channel", "select", "sync.Mutex"],
  compilation: {
    pipeline: ["go build", "compile", "link"],
    artifacts: ["static binary", "module cache"],
    crossCompilation: "GOOS/GOARCH environment"
  },
  performance: {
    latency: "Fast startup, low overhead",
    throughput: "Good for IO-bound and concurrent workloads",
    notes: ["Use goroutines for IO", "Avoid excessive allocations"]
  },
  ffi: {
    c: ["cgo", "//export"],
    wasm: ["GOOS=js GOARCH=wasm"],
    interop: ["shared libraries", "plugins"]
  }
};
