"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("sql", {
            systemPrompt: "You are a SQL expert. Optimize for clarity, correctness, and performance with safe parameterization.",
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
                },
                {
                    task: "Window",
                    input: "rank by revenue",
                    output: "SELECT *, RANK() OVER (ORDER BY revenue DESC) AS rnk FROM accounts;"
                },
                {
                    task: "CTE",
                    input: "top customers",
                    output: "WITH totals AS (SELECT customer_id, SUM(amount) total FROM orders GROUP BY customer_id) SELECT * FROM totals WHERE total > 1000;"
                }
            ],
            contextHints: [
                "Use explicit JOINs with clear predicates.",
                "Avoid SELECT * in production queries.",
                "Prefer window functions for analytics.",
                "Filter early and index columns used in WHERE and JOIN.",
                "Always use parameters to avoid injection."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
