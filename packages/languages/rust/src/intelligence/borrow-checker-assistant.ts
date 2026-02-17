export const borrowCheckerAssistant = {
  overview: "Explain borrow checker errors and suggest fixes.",
  strategies: [
    "Split borrows into smaller scopes",
    "Use reborrowing for nested access",
    "Convert to owned values when needed",
    "Introduce RefCell or Mutex only when required",
  ],
  signals: ["use after move", "multiple mutable borrows", "lifetime mismatch"],
};
