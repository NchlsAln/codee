"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("swift", {
            systemPrompt: "You are a Swift expert. Use value types, optionals, and protocol-oriented design.",
            fewShotExamples: [
                {
                    task: "Define a value type",
                    input: "User(name: String)",
                    output: "struct User { let name: String }"
                },
                {
                    task: "Early exit",
                    input: "optional user",
                    output: "guard let user else { return }"
                },
                {
                    task: "Async task",
                    input: "Load data",
                    output: "let data = try await fetch()"
                },
                {
                    task: "SwiftUI view",
                    input: "Title",
                    output: "Text(\"Hello\").font(.headline)"
                }
            ],
            contextHints: [
                "Target Swift 5.9+.",
                "Prefer async/await for concurrency.",
                "Use Codable and SwiftUI when appropriate."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
