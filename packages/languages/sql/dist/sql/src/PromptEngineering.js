"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
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
exports.PromptEngineering = PromptEngineering;
