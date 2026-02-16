export const chefRuntime = {
  name: "Chef Infra",
  supportedVersions: ["18", "19"],
  executionModel: {
    client: "Chef client converges recipes",
    server: "Chef server stores cookbooks and policies",
    compile: "Resources compiled then converged",
  },
  dependencies: ["Ruby"],
  performance: {
    notes: ["Avoid expensive searches", "Use policyfiles", "Prefer custom resources"],
  },
};
