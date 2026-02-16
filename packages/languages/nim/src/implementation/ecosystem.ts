export const nimEcosystem = {
  fileExtensions: [".nim", ".nims", ".nimble"],
  paradigms: ["procedural", "functional", "oop", "metaprogramming"],
  packageManagers: ["Nimble"],
  buildTools: ["nim", "nimble"],
  testing: ["unittest", "testament"],
  integrationTesting: ["nimble test"],
  linting: ["nim check"],
  formatting: ["nimpretty"],
  typeChecking: ["nim check", "nim c --typeHints:on"],
  docs: ["nim doc", "nim rst2html"],
  ciCd: ["GitHub Actions", "GitLab CI"],
  deploymentTargets: ["cli", "services", "embedded", "wasm"],
  runtimes: ["native", "js", "c"],
  frameworks: ["Jester", "Karax", "Chronos", "Norm", "Prologue"],
  packageIndex: "nimble",
  observability: ["chronicles", "nim-logger"]
};
