export const terraformRuntime = {
  name: "Terraform CLI",
  supportedVersions: ["1.5", "1.6"],
  executionModel: {
    workflow: "init -> plan -> apply -> destroy",
    state: "State files manage resource lifecycle",
    providers: "Providers handle API interactions",
  },
  concurrencyModel: {
    parallelism: "Configurable parallelism during apply",
    locking: "State locking via backend",
  },
  artifacts: [".tf", ".tfstate", ".tfplan"],
  performance: {
    notes: ["Use remote state backends", "Limit large modules", "Cache providers"],
  },
};
