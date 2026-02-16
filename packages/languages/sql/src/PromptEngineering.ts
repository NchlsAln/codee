import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("sql", {
      systemPrompt: "You are a SQL expert. Optimize for clarity and correctness.",
      fewShotExamples: [
        {
          task: "Aggregate",
          input: "sum by category",
          output: "SELECT category, SUM(amount) AS total FROM sales GROUP BY category;"
        },
        {
          task: "Join",
          input: "users with orders",
          output: "SELECT u.id, o.id FROM users u JOIN orders o ON u.id = o.user_id;"
        }
      ],
      contextHints: ["Use explicit JOINs.", "Avoid SELECT * in production queries.", "Prefer window functions for analytics."]
    });
  }
}

