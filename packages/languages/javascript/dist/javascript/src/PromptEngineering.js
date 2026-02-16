"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("javascript", {
            systemPrompt: "You are a JavaScript expert. Prefer modern ES syntax and clear module boundaries.",
            fewShotExamples: [],
            contextHints: []
        });
    }
}
exports.PromptEngineering = PromptEngineering;
