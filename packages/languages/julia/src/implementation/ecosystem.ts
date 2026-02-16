export const juliaEcosystem = {
  fileExtensions: [".jl"],
  paradigms: ["functional", "procedural", "multiple-dispatch"],
  packageManagers: ["Pkg"],
  buildTools: ["Pkg", "PackageCompiler"],
  testing: ["Test", "Aqua"],
  integrationTesting: ["HTTP", "Test"],
  linting: ["Aqua", "JET"],
  formatting: ["JuliaFormatter"],
  typeChecking: ["JET", "@code_warntype"],
  docs: ["Documenter.jl"],
  ciCd: ["GitHub Actions", "Buildkite"],
  deploymentTargets: ["services", "HPC", "CLI", "notebooks"],
  runtimes: ["JIT", "sysimage"],
  frameworks: ["DataFrames", "Flux", "Plots", "Genie", "JuMP"],
  packageIndex: "general",
  observability: ["Logging", "TimerOutputs"]
};
