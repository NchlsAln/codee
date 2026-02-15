import { PromptEngineering } from "@codee/lang-typescript";

describe("PromptEngineering", () => {
  it("builds prompts with task hints and context", () => {
    const prompt = new PromptEngineering();
    const built = prompt.buildPrompt("Context goes here", "refactor");

    expect(built).toContain("TypeScript expert");
    expect(built).toContain("Task: refactor");
    expect(built).toContain("Context goes here");
  });
});
