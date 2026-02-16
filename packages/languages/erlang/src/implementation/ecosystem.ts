export const erlangEcosystem = {
  fileExtensions: [".erl", ".hrl"],
  paradigms: ["functional"],
  packageManagers: ["Rebar3", "Hex"],
  buildTools: ["Rebar3", "Erlang/OTP release tooling"],
  testing: ["EUnit", "Common Test"],
  integrationTesting: ["Common Test"],
  linting: ["Elvis"],
  formatting: ["erlfmt"],
  typeChecking: ["Dialyzer"],
  docs: ["EDoc"],
  ciCd: ["GitHub Actions", "Buildkite"],
  deploymentTargets: ["containers", "Kubernetes", "Erlang releases"],
  runtimes: ["BEAM"],
  frameworks: ["Cowboy", "Webmachine", "Nitrogen"],
  packageIndex: "Hex.pm",
  observability: ["Telemetry", "Observer", "Recon"]
};
