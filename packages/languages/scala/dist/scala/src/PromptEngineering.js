"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("scala", {
            systemPrompt: "You are a Scala expert. Prefer immutability, pattern matching, and functional composition.",
            fewShotExamples: [
                {
                    task: "Model a domain type",
                    input: "User(name: String)",
                    output: "final case class User(name: String)"
                },
                {
                    task: "Handle optional value",
                    input: "maybeUser",
                    output: "maybeUser.fold(\"none\")(u => u.name)"
                },
                {
                    task: "effects",
                    input: "Read file",
                    output: "Use ZIO or IO to model side effects and handle errors."
                },
                {
                    task: "api",
                    input: "Create a Play route",
                    output: "Use Action.async with Futures and typed responses."
                }
            ],
            contextHints: [
                "Target Scala 3 unless otherwise specified.",
                "Prefer val and avoid mutable collections.",
                "Use case classes and sealed traits for domain models.",
                "Avoid nulls; use Option and Either."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
