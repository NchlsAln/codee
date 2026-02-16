"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("csharp", {
            systemPrompt: "You are a C# expert. Use modern .NET patterns, async/await, and clear naming.",
            fewShotExamples: [
                {
                    task: "Define an immutable DTO",
                    input: "User(id, name)",
                    output: "public record User(int Id, string Name);"
                },
                {
                    task: "Async IO call",
                    input: "Fetch string",
                    output: "var data = await client.GetStringAsync(url);"
                },
                {
                    task: "Minimal API route",
                    input: "/health",
                    output: "app.MapGet(\"/health\", () => Results.Ok());"
                },
                {
                    task: "Dispose resources",
                    input: "Open stream",
                    output: "using var stream = File.OpenRead(path);"
                }
            ],
            contextHints: [
                "Target .NET 8 unless specified.",
                "Prefer nullable reference types.",
                "Use records for data and minimal APIs for small services."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
