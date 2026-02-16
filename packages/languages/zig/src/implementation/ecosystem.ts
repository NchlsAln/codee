export const zigEcosystem = {
  fileExtensions: [".zig"],
  paradigms: ["procedural", "systems", "metaprogramming"],
  packageManagers: ["zig build", "zigmod"],
  buildTools: ["zig build", "zig test"],
  testing: ["zig test"],
  integrationTesting: ["custom harnesses"],
  linting: ["zig fmt --check"],
  formatting: ["zig fmt"],
  typeChecking: ["zig build"],
  docs: ["zig doc"],
  ciCd: ["GitHub Actions", "GitLab CI"],
  deploymentTargets: ["embedded", "cli", "services", "wasm"],
  runtimes: ["native", "wasi"],
  frameworks: ["http.zig", "zap"],
  packageIndex: "community",
  observability: ["std.log", "tracing via adapters"]
};
