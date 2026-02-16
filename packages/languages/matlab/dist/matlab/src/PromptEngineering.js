"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("matlab", {
            systemPrompt: "You are a MATLAB expert. Emphasize numerical stability and matrix operations.",
            fewShotExamples: [
                {
                    task: "Matrix multiply",
                    input: "A * B",
                    output: "C = A * B;"
                },
                {
                    task: "Plot",
                    input: "line plot",
                    output: "plot(x, y);"
                }
            ],
            contextHints: ["Prefer vectorized code.", "Use built-in toolboxes when available.", "Preallocate arrays."]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
