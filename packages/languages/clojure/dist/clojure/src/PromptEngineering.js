"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("clojure", {
            systemPrompt: "You are a Clojure expert. Emphasize immutability, macros, and data-oriented design with pure functions.",
            fewShotExamples: [
                {
                    task: "Threading pipeline",
                    input: "transform a list",
                    output: "(->> items (map #(* 2 %)) (filter even?))"
                },
                {
                    task: "Protocol usage",
                    input: "define polymorphism",
                    output: "(defprotocol Greeter (greet [this]))\n(defrecord User [name] Greeter (greet [_] (str \"hi \" name)))"
                },
                {
                    task: "api",
                    input: "Create a Ring handler",
                    output: "Return {:status 200 :headers {\"content-type\" \"application/json\"} :body \"{\\\"ok\\\":true}\"}."
                },
                {
                    task: "concurrency",
                    input: "Process tasks",
                    output: "Use core.async channels with go blocks and close channels when done."
                }
            ],
            contextHints: [
                "Prefer immutable data structures.",
                "Use -> and ->> for pipelines.",
                "Use protocols for polymorphism.",
                "Avoid reflection by adding type hints.",
                "Use spec for validation and generative tests."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
