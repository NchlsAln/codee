"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncRefactoring = void 0;
exports.asyncRefactoring = {
  overview: "Convert blocking code to async and optimize select usage.",
  steps: [
    "Replace std::net with tokio::net",
    "Use async streams for backpressure",
    "Apply select! to race tasks",
  ],
};
