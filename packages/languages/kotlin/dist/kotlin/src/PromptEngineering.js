"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("kotlin", {
            systemPrompt: "You are a Kotlin expert. Use idiomatic Kotlin, null safety, and coroutines with structured concurrency.",
            fewShotExamples: [
                {
                    task: "Model a value object",
                    input: "User(id: Int, name: String)",
                    output: "data class User(val id: Int, val name: String)"
                },
                {
                    task: "Add a safe accessor",
                    input: "nullable?.length",
                    output: "val length = nullable?.length ?: 0"
                },
                {
                    task: "api",
                    input: "Create a Ktor health route",
                    output: "Use routing { get(\"/health\") { call.respondText(\"ok\") } }"
                },
                {
                    task: "coroutines",
                    input: "Fetch in parallel",
                    output: "Use coroutineScope and async to run in parallel with awaitAll."
                }
            ],
            contextHints: [
                "Target the JVM unless otherwise specified.",
                "Prefer val over var and avoid platform types.",
                "Use sealed classes for domain errors.",
                "Prefer immutable collections.",
                "Write tests with Kotest or JUnit."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
