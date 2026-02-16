export const haskellEcosystem = {
  fileExtensions: [".hs", ".lhs"],
  paradigms: ["functional"],
  packageManagers: ["Cabal", "Stack"],
  buildTools: ["cabal", "stack"],
  testing: ["hspec", "tasty", "quickcheck"],
  integrationTesting: ["hspec-wai", "servant-client"],
  linting: ["hlint"],
  formatting: ["ormolu"],
  typeChecking: ["ghc", "ghci"],
  docs: ["haddock"],
  ciCd: ["GitHub Actions", "Buildkite"],
  deploymentTargets: ["cli", "services", "containers"],
  runtimes: ["native", "bytecode"],
  frameworks: ["Servant", "Yesod", "Persistent", "Conduit"],
  packageIndex: "hackage",
  observability: ["ekg", "prometheus", "eventlog"]
};
