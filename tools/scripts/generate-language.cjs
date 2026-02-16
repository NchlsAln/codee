/* eslint-disable @typescript-eslint/no-var-requires */
const { mkdirSync, writeFileSync, existsSync, readFileSync } = require("fs");
const { join } = require("path");

const languageIdRaw = process.argv[2];
const languageNameArg = process.argv[3];
const updateMode = process.argv.includes("--update");
const forceMode = process.argv.includes("--force");
if (!languageIdRaw) {
  console.error("Usage: node tools/scripts/generate-language.cjs <language-id> <language-name> [--update] [--force]");
  process.exit(1);
}
const languageId = languageIdRaw.trim().toLowerCase();

const toTitleCase = (value) =>
  value
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => `${part[0]?.toUpperCase() || ""}${part.slice(1)}`)
    .join(" ");

const toPascalCase = (value) =>
  value
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => `${part[0]?.toUpperCase() || ""}${part.slice(1)}`)
    .join("");

const toCamelCase = (value) => {
  const pascal = toPascalCase(value);
  return pascal ? `${pascal[0].toLowerCase()}${pascal.slice(1)}` : "";
};

const languageName = languageNameArg || toTitleCase(languageIdRaw);
const languagePascal = toPascalCase(languageName);
const languageIdentifier = toCamelCase(languageId);

const root = process.cwd();
const target = join(root, "packages", "languages", languageId);
if (existsSync(target)) {
  if (!updateMode) {
    console.error(`Language package already exists: ${target}`);
    process.exit(1);
  }
}

const rootPackage = JSON.parse(readFileSync(join(root, "package.json"), "utf-8"));
const version = rootPackage.version || "0.1.0";

const LANGUAGE_TEMPLATE = {
  files: [
    "src/implementation/runtime.ts",
    "src/implementation/ecosystem.ts",
    "src/implementation/idioms.ts",
    "src/templates/stdlib/collections.ts",
    "src/templates/concurrency/async.ts",
    "src/analysis/ast-patterns.ts",
    "src/analysis/type-inference.ts",
    "src/index.ts",
    "src/CodeTemplates.ts",
    "src/LanguageAnalyzer.ts",
    "src/LanguageServer.ts",
    "src/PromptEngineering.ts",
    "package.json",
    "tsconfig.json",
    "README.md"
  ],
  research: {
    runtime: "Garbage collection? Ownership? VM?",
    packageManager: "npm? pip? cargo? go mod?",
    lsp: "official language server name",
    fileExtensions: [".ext"],
    paradigms: ["oop", "functional", "procedural"]
  }
};

LANGUAGE_TEMPLATE.files.forEach((filePath) => {
  const dir = join(target, filePath.replace(/\\/g, "/").split("/").slice(0, -1).join("/"));
  if (dir && !existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
});

/* eslint-disable no-console */

const writeFileIfNeeded = (filePath, content) => {
  if (existsSync(filePath) && !forceMode) {
    return;
  }
  writeFileSync(filePath, content);
};

const packageJson = {
  name: `@codee/lang-${languageId}`,
  version,
  main: "dist/index.js",
  types: "dist/index.d.ts",
  scripts: {
    build: "tsc -b",
    dev: "tsc -b -w",
    test: "echo \"No tests yet\"",
    lint: "eslint src --ext .ts",
    typecheck: "tsc -p tsconfig.json --noEmit"
  }
};

writeFileIfNeeded(join(target, "package.json"), JSON.stringify(packageJson, null, 2));
writeFileIfNeeded(
  join(target, "tsconfig.json"),
  JSON.stringify(
    {
      extends: "../../../tsconfig.base.json",
      compilerOptions: { composite: true, outDir: "dist", rootDir: "src" },
      include: ["src"]
    },
    null,
    2
  )
);

const index = `import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { ${languageIdentifier}Runtime } from "./implementation/runtime";
import { ${languageIdentifier}Ecosystem } from "./implementation/ecosystem";
import { ${languageIdentifier}Idioms } from "./implementation/idioms";
import { ${languageIdentifier}AstPatterns } from "./analysis/ast-patterns";
import { infer${languagePascal}Types } from "./analysis/type-inference";

export const ${languageIdentifier}Definition: LanguageDefinition = {
  id: "${languageId}",
  name: "${languageName}",
  extensions: ${JSON.stringify(LANGUAGE_TEMPLATE.research.fileExtensions, null, 2)},
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { ${languageIdentifier}Runtime, ${languageIdentifier}Ecosystem, ${languageIdentifier}Idioms, ${languageIdentifier}AstPatterns, infer${languagePascal}Types };
`;

const analyzer = `import { BaseLanguageAnalyzer } from "@codee/lang-common";

export class LanguageAnalyzer extends BaseLanguageAnalyzer {
  constructor() {
    super("${languageId}", "tree-sitter-${languageId}");
  }
}
`;

const server = `import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath) {
    super({
      languageId: "${languageId}",
      command: "${LANGUAGE_TEMPLATE.research.lsp}",
      args: [],
      projectPath
    });
  }
}
`;

const templates = `import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("${languageId}", {
      idioms: [],
      templates: {
        stdlibCollections: collectionsTemplate(),
        concurrencyAsync: asyncTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
`;

const prompt = `import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("${languageId}", {
      systemPrompt: "You are a ${languageName} expert.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
`;

const runtime = `export const ${languageIdentifier}Runtime = {
  runtimeModel: "${LANGUAGE_TEMPLATE.research.runtime}",
  packageManager: "${LANGUAGE_TEMPLATE.research.packageManager}",
  lspServer: "${LANGUAGE_TEMPLATE.research.lsp}"
};
`;

const ecosystem = `export const ${languageIdentifier}Ecosystem = {
  fileExtensions: ${JSON.stringify(LANGUAGE_TEMPLATE.research.fileExtensions, null, 2)},
  paradigms: ${JSON.stringify(LANGUAGE_TEMPLATE.research.paradigms, null, 2)}
};
`;

const idioms = `export const ${languageIdentifier}Idioms: Array<{ name: string; description: string }> = [];
`;

const collectionsTemplate = `export function collectionsTemplate(): string {
  return "// TODO: Add ${languageName} stdlib collection examples.";
}
`;

const asyncTemplate = `export function asyncTemplate(): string {
  return "// TODO: Add ${languageName} concurrency/async example.";
}
`;

const astPatterns = `export const ${languageIdentifier}AstPatterns: Array<{ pattern: string; description: string }> = [];
`;

const typeInference = `export function infer${languagePascal}Types(source: string): Record<string, string> {
  void source;
  return {};
}
`;

const readme = `# ${languageName} Language Package

## Research Checklist
- Runtime model: ${LANGUAGE_TEMPLATE.research.runtime}
- Package manager: ${LANGUAGE_TEMPLATE.research.packageManager}
- LSP server: ${LANGUAGE_TEMPLATE.research.lsp}
- File extensions: ${LANGUAGE_TEMPLATE.research.fileExtensions.join(", ")}
- Paradigms: ${LANGUAGE_TEMPLATE.research.paradigms.join(", ")}

## Next Steps
1. Fill templates in src/templates.
2. Implement AST patterns + type inference.
3. Expand prompt engineering examples.
4. Add idioms and ecosystem metadata.
`;

writeFileIfNeeded(join(target, "src", "index.ts"), index);
writeFileIfNeeded(join(target, "src", "LanguageAnalyzer.ts"), analyzer);
writeFileIfNeeded(join(target, "src", "LanguageServer.ts"), server);
writeFileIfNeeded(join(target, "src", "CodeTemplates.ts"), templates);
writeFileIfNeeded(join(target, "src", "PromptEngineering.ts"), prompt);
writeFileIfNeeded(join(target, "src", "implementation", "runtime.ts"), runtime);
writeFileIfNeeded(join(target, "src", "implementation", "ecosystem.ts"), ecosystem);
writeFileIfNeeded(join(target, "src", "implementation", "idioms.ts"), idioms);
writeFileIfNeeded(join(target, "src", "templates", "stdlib", "collections.ts"), collectionsTemplate);
writeFileIfNeeded(join(target, "src", "templates", "concurrency", "async.ts"), asyncTemplate);
writeFileIfNeeded(join(target, "src", "analysis", "ast-patterns.ts"), astPatterns);
writeFileIfNeeded(join(target, "src", "analysis", "type-inference.ts"), typeInference);
writeFileIfNeeded(join(target, "README.md"), readme);

console.log(`Created language scaffold at ${target}`);
