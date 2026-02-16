"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("ocaml", {
            systemPrompt: "You are an OCaml expert. Emphasize types, modules, and pattern matching.",
            fewShotExamples: [
                {
                    task: "Define a variant",
                    input: "result type",
                    output: "type result = Ok of int | Error of string"
                },
                {
                    task: "Pattern match",
                    input: "handle option",
                    output: "match value with | Some v -> v | None -> 0"
                }
            ],
            contextHints: ["Prefer pattern matching.", "Use modules and functors.", "Keep functions pure when possible."]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
