"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationSafety = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const GitRunner_1 = require("../../git/GitRunner");
const syntax_validator_1 = require("../../validators/syntax-validator");
const ProjectAnalyzer_1 = require("./ProjectAnalyzer");
const LARGE_PROJECT_FILE_COUNT = 400;
class TranslationSafety {
    async validatePreConditions(repoPath) {
        const warnings = [];
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
    async validatePostTranslation(translations, targetLang) {
        const errors = [];
        const suggestions = new Set();
        for (const translation of translations) {
            const result = (0, syntax_validator_1.validateSyntax)(targetLang, translation.content);
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
    async isGitClean(repoPath) {
        const git = new GitRunner_1.GitRunner(repoPath);
        const isRepo = await git.isGitRepo();
        if (!isRepo) {
            return true;
        }
        return git.isClean();
    }
    async countFiles(repoPath) {
        const analyzer = new ProjectAnalyzer_1.ProjectAnalyzer();
        const structure = await analyzer.analyze(repoPath);
        return structure.files.length;
    }
    async checkSourceTests(repoPath, warnings) {
        const candidates = [
            "package.json",
            "pyproject.toml",
            "Cargo.toml",
            "go.mod",
            "pom.xml",
            "build.gradle",
            "build.gradle.kts"
        ];
        const existing = await Promise.all(candidates.map(async (candidate) => {
            try {
                await promises_1.default.access(node_path_1.default.join(repoPath, candidate));
                return candidate;
            }
            catch {
                return null;
            }
        }));
        if (existing.some(Boolean)) {
            warnings.push("Source tests detected but not executed; run them before translating for best results.");
            return null;
        }
        return null;
    }
    collectSuggestions(details, targetLang, suggestions) {
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
exports.TranslationSafety = TranslationSafety;
