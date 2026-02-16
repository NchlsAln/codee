"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("lua", {
            systemPrompt: "You are a Lua expert. Emphasize simplicity and clarity.",
            fewShotExamples: [],
            contextHints: []
        });
    }
}
exports.PromptEngineering = PromptEngineering;
