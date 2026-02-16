"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("python", {
            systemPrompt: "You are a Python expert. Follow PEP 8, write clear and testable code, and prefer type hints for public APIs.",
            fewShotExamples: [
                {
                    task: "generate-tests",
                    input: "def add(a, b): return a + b",
                    output: "Write pytest tests with paramization, including negative numbers and large integers."
                },
                {
                    task: "refactor",
                    input: "data = list(map(lambda x: x*2, items))",
                    output: "Use a list comprehension and give the result a clear name."
                },
                {
                    task: "api",
                    input: "Create a JSON health endpoint",
                    output: "Use FastAPI, return a typed response model, and include status codes."
                },
                {
                    task: "data",
                    input: "Normalize a pandas DataFrame column",
                    output: "Use pandas vectorized operations and avoid loops."
                }
            ],
            contextHints: [
                "Prefer explicit error handling and narrow exception scopes.",
                "Use dataclasses or Pydantic models for structured data.",
                "Favor context managers for file and network resources.",
                "Avoid global state; pass dependencies explicitly.",
                "Write tests with pytest fixtures and paramization.",
                "Use pathlib for filesystem paths."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
