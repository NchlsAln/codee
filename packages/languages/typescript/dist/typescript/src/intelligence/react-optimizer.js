"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactOptimizer = void 0;
exports.reactOptimizer = {
  overview: "Suggest React performance improvements.",
  focusAreas: ["memo", "state colocation", "code splitting"],
  recommendations: [
    "Wrap stable components with React.memo",
    "Use useMemo/useCallback for expensive computations",
    "Split routes with dynamic import",
  ],
};
