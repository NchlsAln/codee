"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("cpp", {
            systemPrompt: "You are a C++ expert. Favor modern, safe, and efficient patterns. Prefer RAII and avoid raw ownership.",
            fewShotExamples: [
                {
                    task: "refactor",
                    input: "int* p = new int(3); delete p;",
                    output: "Use std::unique_ptr to manage ownership."
                },
                {
                    task: "api",
                    input: "Build a JSON response",
                    output: "Use nlohmann::json and return serialized string."
                }
            ],
            contextHints: [
                "Prefer std::string_view for non-owning strings.",
                "Use std::optional instead of nullable pointers.",
                "Avoid undefined behavior; validate bounds."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
