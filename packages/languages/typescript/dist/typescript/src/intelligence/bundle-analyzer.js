"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundleAnalyzer = void 0;
exports.bundleAnalyzer = {
  overview: "Identify bundle bloat and tree-shaking issues.",
  signals: ["large vendor chunks", "barrel imports", "side effects"],
  recommendations: [
    "Prefer direct imports",
    "Mark sideEffects in package.json",
    "Use dynamic import for optional features",
  ],
};
