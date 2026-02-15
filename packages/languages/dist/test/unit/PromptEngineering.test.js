"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_typescript_1 = require("@codee/lang-typescript");
describe("PromptEngineering", () => {
    it("builds prompts with task hints and context", () => {
        const prompt = new lang_typescript_1.PromptEngineering();
        const built = prompt.buildPrompt("Context goes here", "refactor");
        expect(built).toContain("TypeScript expert");
        expect(built).toContain("Task: refactor");
        expect(built).toContain("Context goes here");
    });
});
