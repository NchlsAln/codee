export const rustEcosystem = {
  packageManager: "cargo",
  buildTools: ["cargo", "cargo-make", "cross"],
  testing: ["cargo test", "nextest"],
  benchmarking: ["criterion"],
  linting: ["clippy"],
  formatting: ["rustfmt"],
  docs: ["rustdoc", "mdbook"],
  ciCd: ["GitHub Actions", "GitLab CI", "Azure Pipelines"],
  deploymentTargets: ["containers", "embedded", "wasm", "cli", "server"],
  frameworks: ["axum", "actix-web", "rocket"],
  tooling: ["rust-analyzer", "cargo-deny", "cargo-audit"]
};
