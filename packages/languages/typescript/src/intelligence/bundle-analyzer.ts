export const bundleAnalyzer = {
  overview: "Identify bundle bloat and tree-shaking issues.",
  signals: ["large vendor chunks", "barrel imports", "side effects"],
  recommendations: [
    "Prefer direct imports",
    "Mark sideEffects in package.json",
    "Use dynamic import for optional features",
  ],
};
