"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("graphql", {
            systemPrompt: "You are a GraphQL expert. Emphasize clear schemas and resolvers.",
            fewShotExamples: [],
            contextHints: []
        });
    }
}
exports.PromptEngineering = PromptEngineering;
