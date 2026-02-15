import { NaturalLanguageToCode } from "../../src/intelligence/NaturalLanguageToCode";

describe("NaturalLanguageToCode", () => {
  it("produces a plan and skeleton", async () => {
    const planner = new NaturalLanguageToCode();

    const result = await planner.plan("Create a metrics collector", "typescript");

    expect(result.steps.length).toBeGreaterThan(0);
    expect(result.skeleton).toContain("function main");
  });
});
