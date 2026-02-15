import fs from "node:fs/promises";
import path from "node:path";
import { TestGenerator } from "../../src/intelligence/TestGenerator";

const fixturesRoot = path.join(__dirname, "fixtures");

describe("TestGenerator", () => {
  it("generates jest tests for TypeScript", async () => {
    const source = await fs.readFile(path.join(fixturesRoot, "typescript", "math.ts"), "utf-8");
    const generator = new TestGenerator();

    const result = await generator.generate({
      source,
      language: "typescript",
      framework: "jest",
      fileName: "math.ts"
    });

    expect(result.files[0].contents).toContain("describe");
    expect(result.files[0].contents).toContain("handles add");
  });

  it("generates pytest tests for Python", async () => {
    const source = await fs.readFile(path.join(fixturesRoot, "python", "math.py"), "utf-8");
    const generator = new TestGenerator();

    const result = await generator.generate({
      source,
      language: "python",
      framework: "pytest",
      fileName: "math.py"
    });

    expect(result.files[0].contents).toContain("def test_add");
  });
});
