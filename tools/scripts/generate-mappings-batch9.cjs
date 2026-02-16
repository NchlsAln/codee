/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const { mkdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const ROOT = process.cwd();
const MAPPINGS_DIR = join(ROOT, "packages", "polyglot-knowledge", "src", "mappings");

const BATCH9 = ["html", "css", "scss", "json", "yaml", "xml"];
const TARGETS = [
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
  "dart",
  "php",
  "ruby",
  "elixir",
  "erlang",
  "clojure",
  "zig",
  "nim",
  "crystal",
  "ocaml",
  "haskell",
  "r",
  "julia",
  "matlab",
  "sql",
  "sas",
  "bash",
  "powershell",
  "awk",
  "sed"
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
  dart: "Dart",
  php: "Php",
  ruby: "Ruby",
  elixir: "Elixir",
  erlang: "Erlang",
  clojure: "Clojure",
  zig: "Zig",
  nim: "Nim",
  crystal: "Crystal",
  ocaml: "Ocaml",
  haskell: "Haskell",
  r: "R",
  julia: "Julia",
  matlab: "Matlab",
  sql: "Sql",
  sas: "Sas",
  bash: "Bash",
  powershell: "PowerShell",
  awk: "Awk",
  sed: "Sed",
  html: "Html",
  css: "Css",
  scss: "Scss",
  json: "Json",
  yaml: "Yaml",
  xml: "Xml"
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

BATCH9.forEach((from) => {
  const fromDir = join(MAPPINGS_DIR, from);
  ensureDir(fromDir);
  TARGETS.forEach((to) => {
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

console.log("Generated Batch 9 mapping files.");
