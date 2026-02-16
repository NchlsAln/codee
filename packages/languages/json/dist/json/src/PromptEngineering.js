"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("json", {
            systemPrompt: "You are a JSON expert. Ensure valid structure, stable schemas, and API-friendly shapes.",
            fewShotExamples: [
                {
                    task: "Config",
                    input: "feature flags",
                    output: "{ \"flags\": { \"newNavbar\": true, \"betaUser\": false } }"
                },
                {
                    task: "API payload",
                    input: "user record",
                    output: "{ \"id\": \"u_123\", \"email\": \"a@b.com\", \"roles\": [\"admin\"] }"
                },
                {
                    task: "Schema",
                    input: "define schema for user",
                    output: "{ \"$schema\": \"https://json-schema.org/draft/2020-12/schema\", \"type\": \"object\" }"
                }
            ],
            contextHints: [
                "Prefer consistent naming conventions and stable keys.",
                "Avoid trailing commas; JSON must be strict.",
                "Explicitly model null vs missing fields.",
                "Use JSON Schema for validation and documentation.",
                "Keep arrays homogeneous when possible."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
