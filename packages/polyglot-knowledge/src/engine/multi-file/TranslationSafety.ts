import fs from "node:fs/promises";
import path from "node:path";
import { GitRunner } from "../../git/GitRunner";
import { validateSyntax } from "../../validators/syntax-validator";
import { PreCheckResult, PostCheckResult, TranslatedFile, LanguageId } from "../../types";
import { ProjectAnalyzer } from "./ProjectAnalyzer";

const LARGE_PROJECT_FILE_COUNT = 400;

export class TranslationSafety {
  async validatePreConditions(repoPath: string): Promise<PreCheckResult> {
    const warnings: string[] = [];
    const gitClean = await this.isGitClean(repoPath);
    const fileCount = await this.countFiles(repoPath);

    if (fileCount >= LARGE_PROJECT_FILE_COUNT) {
      warnings.push("Large project detected; translation may take 10+ minutes.");
    }

    const testsPassing = await this.checkSourceTests(repoPath, warnings);

    return {
      gitClean,
      testsPassing,
      fileCount,
      warnings
    };
  }

  async validatePostTranslation(
    translations: TranslatedFile[],
    targetLang: LanguageId
  ): Promise<PostCheckResult> {
    const errors: Array<{ filePath: string; details: string[] }> = [];
    const suggestions = new Set<string>();

    for (const translation of translations) {
      const result = validateSyntax(targetLang, translation.content);
      if (!result.ok) {
        errors.push({ filePath: translation.targetPath, details: result.details });
        this.collectSuggestions(result.details, targetLang, suggestions);
      }
    }

    return {
      ok: errors.length === 0,
      errors,
      suggestions: Array.from(suggestions.values())
    };
  }

  private async isGitClean(repoPath: string): Promise<boolean> {
    const git = new GitRunner(repoPath);
    const isRepo = await git.isGitRepo();
    if (!isRepo) {
      return true;
    }
    return git.isClean();
  }

  private async countFiles(repoPath: string): Promise<number> {
    const analyzer = new ProjectAnalyzer();
    const structure = await analyzer.analyze(repoPath);
    return structure.files.length;
  }

  private async checkSourceTests(repoPath: string, warnings: string[]): Promise<boolean | null> {
    const candidates = [
      "package.json",
      "pyproject.toml",
      "Cargo.toml",
      "go.mod",
      "pom.xml",
      "build.gradle",
      "build.gradle.kts"
    ];

    const existing = await Promise.all(
      candidates.map(async (candidate) => {
        try {
          await fs.access(path.join(repoPath, candidate));
          return candidate;
        } catch {
          return null;
        }
      })
    );

    if (existing.some(Boolean)) {
      warnings.push("Source tests detected but not executed; run them before translating for best results.");
      return null;
    }

    return null;
  }

  private collectSuggestions(details: string[], targetLang: LanguageId, suggestions: Set<string>): void {
    if (targetLang === "typescript" || targetLang === "javascript") {
      if (details.some((detail) => detail.includes("TS2307"))) {
        suggestions.add("Check module paths and ensure dependencies are installed.");
      }
      if (details.some((detail) => detail.includes("TS2304"))) {
        suggestions.add("Verify missing identifiers; add imports or adjust translated names.");
      }
    }

    if (targetLang === "python") {
      if (details.some((detail) => detail.includes("SyntaxError"))) {
        suggestions.add("Review indentation and colons in translated Python code.");
      }
    }

    if (targetLang === "rust") {
      if (details.some((detail) => detail.includes("expected") && detail.includes("found"))) {
        suggestions.add("Review type annotations and missing trait imports in Rust output.");
      }
    }

    if (targetLang === "go") {
      if (details.some((detail) => detail.includes("undefined"))) {
        suggestions.add("Check for missing imports or incorrect symbol casing in Go output.");
      }
    }

    if (targetLang === "java") {
      if (details.some((detail) => detail.includes("class") && detail.includes("public"))) {
        suggestions.add("Ensure public class names match file names in Java output.");
      }
    }

    if (targetLang === "cpp") {
      if (details.some((detail) => detail.includes("error:") && detail.includes(";"))) {
        suggestions.add("Check for missing semicolons or include headers in C++ output.");
      }
    }
  }
}
