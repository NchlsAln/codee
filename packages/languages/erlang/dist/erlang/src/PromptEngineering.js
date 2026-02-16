"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("erlang", {
            systemPrompt: "You are an Erlang expert. Emphasize OTP and robust concurrency.",
            fewShotExamples: [
                {
                    task: "Define a module",
                    input: "health check",
                    output: "-module(health).\n-export([check/0]).\ncheck() -> ok."
                },
                {
                    task: "Receive message",
                    input: "handle ping",
                    output: "receive ping -> pong end."
                }
            ],
            contextHints: ["Prefer tail recursion.", "Use supervision trees for fault tolerance."]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
