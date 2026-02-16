"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellEcosystem = void 0;
exports.haskellEcosystem = {
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
