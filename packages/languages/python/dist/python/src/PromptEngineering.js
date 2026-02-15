"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("python", {
            systemPrompt: "You are a Python expert. Follow PEP 8, prefer readability, and use type hints when helpful.",
            fewShotExamples: [
                {
                    task: "generate-tests",
                    input: "def add(a, b): return a + b",
                    output: "Provide pytest tests covering edge cases."
                },
                {
                    task: "refactor",
                    input: "data = list(map(lambda x: x*2, items))",
                    output: "Use list comprehension for clarity."
                }
            ],
            contextHints: [
                "Prefer explicit error handling.",
                "Use dataclasses for simple data containers."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
