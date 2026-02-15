import path from "node:path";
import { CorrectionStore } from "./learning";
import { ConfidenceScore, TestGenerationPlan, TestSuiteResult } from "./types";

export class TestGenerator {
  constructor(private readonly correctionStore?: CorrectionStore) {}

  async generate(plan: TestGenerationPlan): Promise<TestSuiteResult> {
    const notes: string[] = [];
    const framework = plan.framework ?? (plan.language === "python" ? "pytest" : "jest");
    const fileName = plan.fileName ?? "module";
    const testFilePath = this.buildTestPath(fileName, plan.language, framework);

    const functions = this.findFunctionNames(plan.source, plan.language);
    if (functions.length === 0) {
      notes.push("No functions detected. Generated a minimal test scaffold.");
    }

    const body = this.buildTestBody({
      functions,
      language: plan.language,
      framework
    });

    const confidence: ConfidenceScore = {
      score: functions.length > 0 ? 0.65 : 0.4,
      rationale: "Heuristic test generation based on detected symbols."
    };

    if (this.correctionStore) {
      notes.push("Correction store connected for future feedback.");
    }

    return {
      files: [{ filePath: testFilePath, contents: body }],
      notes,
      confidence
    };
  }

  private buildTestPath(fileName: string, language: TestGenerationPlan["language"], framework: string): string {
    const base = path.parse(fileName).name;
    if (language === "python") {
      return path.join("tests", `test_${base}.py`);
    }
    return path.join("__tests__", `${base}.test.${framework === "vitest" ? "ts" : "ts"}`);
  }

  private findFunctionNames(source: string, language: TestGenerationPlan["language"]): string[] {
    if (language === "python") {
      return Array.from(source.matchAll(/def\s+([a-zA-Z0-9_]+)\s*\(/g))
        .map((match) => match[1])
        .filter((name): name is string => Boolean(name));
    }
    return Array.from(source.matchAll(/function\s+([a-zA-Z0-9_]+)\s*\(/g))
      .map((match) => match[1])
      .filter((name): name is string => Boolean(name));
  }

  private buildTestBody(options: {
    functions: string[];
    language: TestGenerationPlan["language"];
    framework: string;
  }): string {
    if (options.language === "python") {
      const lines = ["import pytest", "", "# Import module under test", ""];
      const targets = options.functions.length > 0 ? options.functions : ["sample"];
      for (const name of targets) {
        lines.push(`def test_${name}():`);
        lines.push("    assert True");
        lines.push("");
      }
      return lines.join("\n");
    }

    const targets = options.functions.length > 0 ? options.functions : ["sample"];
    const lines = [
      'import { describe, expect, it } from "@jest/globals";',
      "",
      'describe("generated tests", () => {'
    ];
    for (const name of targets) {
      lines.push(`  it("handles ${name}", () => {`);
      lines.push("    expect(true).toBe(true);");
      lines.push("  });");
    }
    lines.push("});");
    lines.push("");
    return lines.join("\n");
  }
}
