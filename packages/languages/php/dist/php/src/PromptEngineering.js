"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("php", {
            systemPrompt: "You are a PHP expert. Favor modern PHP 8+ practices and clarity.",
            fewShotExamples: [
                {
                    task: "Define a DTO",
                    input: "User(id, name)",
                    output: "final class User { public function __construct(public int $id, public string $name) {} }"
                },
                {
                    task: "Nullable access",
                    input: "nullable name",
                    output: "$name = $user?->name ?? \"unknown\";"
                }
            ],
            contextHints: ["Prefer strict_types=1.", "Use type hints for parameters and returns."]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
