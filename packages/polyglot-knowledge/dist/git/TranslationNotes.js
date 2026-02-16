"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTranslationNotes = buildTranslationNotes;
const node_path_1 = __importDefault(require("node:path"));
const TEST_HINTS = {
    rust: "cargo test",
    go: "go test ./...",
    python: "pytest",
    typescript: "npm test",
    java: "mvn test",
    cpp: "ctest"
};
function buildTranslationNotes(result, targetLanguage) {
    const translated = result.files.filter((file) => file.status === "auto");
    const review = result.files.filter((file) => file.status === "review");
    const skipped = result.files.filter((file) => file.status === "skip");
    const testHint = TEST_HINTS[targetLanguage] ?? "Run your target language tests";
    const formatList = (items) => {
        if (items.length === 0) {
            return "- None";
        }
        return items
            .map((item) => `- ${node_path_1.default.relative(result.analysis.rootPath, item.sourcePath)} -> ${node_path_1.default.relative(result.analysis.rootPath, item.targetPath)}`)
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
