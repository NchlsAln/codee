/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const { mkdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const ROOT = process.cwd();
const MAPPINGS_DIR = join(ROOT, "packages", "polyglot-knowledge", "src", "mappings");

const LANGS = [
  "python",
  "typescript",
  "rust",
  "go",
  "java",
  "cpp",
  "kotlin",
  "scala",
  "csharp",
  "swift",
  "dart"
];

const NAME_MAP = {
  python: "Python",
  typescript: "TypeScript",
  rust: "Rust",
  go: "Go",
  java: "Java",
  cpp: "Cpp",
  kotlin: "Kotlin",
  scala: "Scala",
  csharp: "Csharp",
  swift: "Swift",
  dart: "Dart"
};

const ensureDir = (dir) => mkdirSync(dir, { recursive: true });

const functionName = (from, to) => `${from}To${NAME_MAP[to] || to}`;

const template = (from, to) => {
  const fn = functionName(from, to);
  return `import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("${from}", "${to}");

export function ${fn}(code: string): TranslationResult {
  return translateWithFallback("${from}", "${to}", code);
}

export const ${fn}Rules = rules;
`;
};

LANGS.forEach((from) => {
  const fromDir = join(MAPPINGS_DIR, from);
  ensureDir(fromDir);
  LANGS.forEach((to) => {
    if (to === from) {
      return;
    }
    const toFile = join(fromDir, `to-${to}.ts`);
    writeFileSync(toFile, template(from, to));

    const targetDir = join(MAPPINGS_DIR, to);
    ensureDir(targetDir);
    const fromFile = join(targetDir, `from-${from}.ts`);
    writeFileSync(fromFile, template(from, to));
  });
});

console.log("Generated mapping files for 11 language set.");
