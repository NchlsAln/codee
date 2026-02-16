import path from "node:path";
import { BatchTranslationResult } from "../types";

const TEST_HINTS: Record<string, string> = {
  rust: "cargo test",
  go: "go test ./...",
  python: "pytest",
  typescript: "npm test",
  java: "mvn test",
  cpp: "ctest"
};

export function buildTranslationNotes(result: BatchTranslationResult, targetLanguage: string): string {
  const translated = result.files.filter((file) => file.status === "auto");
  const review = result.files.filter((file) => file.status === "review");
  const skipped = result.files.filter((file) => file.status === "skip");
  const testHint = TEST_HINTS[targetLanguage] ?? "Run your target language tests";

  const formatList = (items: Array<{ sourcePath: string; targetPath: string }>): string => {
    if (items.length === 0) {
      return "- None";
    }
    return items
      .map((item) => `- ${path.relative(result.analysis.rootPath, item.sourcePath)} -> ${path.relative(result.analysis.rootPath, item.targetPath)}`)
      .join("\n");
  };

  return [
    "# Translation Notes",
    "",
    `Translated files: ${translated.length}`,
    `Needs review: ${review.length}`,
    `Skipped: ${skipped.length}`,
    "",
    "## Translated",
    formatList(translated),
    "",
    "## Needs Review",
    formatList(review),
    "",
    "## Skipped",
    formatList(skipped),
    "",
    "## Known Issues",
    result.notes.length > 0 ? result.notes.map((note) => `- ${note}`).join("\n") : "- None",
    "",
    "## Next Steps",
    `- Run tests: ${testHint}`
  ].join("\n");
}
