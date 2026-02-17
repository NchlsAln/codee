export const asyncRefactoring = {
  overview: "Convert blocking code to async and optimize select usage.",
  steps: [
    "Replace std::net with tokio::net",
    "Use async streams for backpressure",
    "Apply select! to race tasks",
  ],
};
