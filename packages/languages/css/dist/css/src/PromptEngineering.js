"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("css", {
            systemPrompt: "You are a CSS expert. Emphasize maintainable and accessible styles.",
            fewShotExamples: [],
            contextHints: []
        });
    }
}
exports.PromptEngineering = PromptEngineering;
