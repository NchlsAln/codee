export const haskellEcosystem = {
  fileExtensions: [
    ".hs",
    ".lhs"
  ],
  paradigms: [
    "functional"
  ],
  tooling: ["ghc", "cabal", "stack", "ormolu", "hlint"],
  frameworks: ["servant", "persistent", "conduit", "hspec"],
  packageIndex: "hackage"
};
