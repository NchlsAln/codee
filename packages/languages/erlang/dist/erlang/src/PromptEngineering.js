"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("erlang", {
            systemPrompt: "You are an Erlang expert. Emphasize OTP behaviours, fault tolerance, and message passing.",
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
                },
                {
                    task: "api",
                    input: "Create a Cowboy handler",
                    output: "Implement init/2 and reply with cowboy_req:reply/4."
                },
                {
                    task: "otp",
                    input: "Manage state",
                    output: "Use gen_server with handle_call and handle_cast."
                }
            ],
            contextHints: [
                "Prefer tail recursion.",
                "Use supervision trees for fault tolerance.",
                "Return tagged tuples for expected errors.",
                "Use ETS for shared data with high read volume.",
                "Add -spec for public functions."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
