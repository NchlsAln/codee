export const zigRuntime = {
  runtimeModel: "LLVM backend with manual memory and explicit allocators; comptime evaluation; no hidden control flow.",
  packageManager: "zig build (builtin), zigmod (community), package manager in development",
  lspServer: "zls",
  executionModel: ["native", "wasm", "freestanding"]
};
