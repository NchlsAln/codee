const { mkdirSync, writeFileSync, existsSync } = require("fs");
const { join } = require("path");

const language = process.argv[2];
if (!language) {
  console.error("Usage: npm run generate:language -- <languageId>");
  process.exit(1);
}

const root = process.cwd();
const target = join(root, "packages", "languages", language);
if (existsSync(target)) {
  console.error(`Language package already exists: ${target}`);
  process.exit(1);
}

mkdirSync(join(target, "src"), { recursive: true });

const packageJson = {
  name: `@codee/lang-${language}`,
  version: "0.1.0",
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

writeFileSync(join(target, "package.json"), JSON.stringify(packageJson, null, 2));
writeFileSync(
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

const index = `import { LanguageDefinition } from "../../common/src/LanguageRegistry";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";

export const ${language}Definition: LanguageDefinition = {
  id: "${language}",
  name: "${language}",
  extensions: [],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
`;

const analyzer = `import { BaseLanguageAnalyzer } from "../../common/src/BaseLanguageAnalyzer";

export class LanguageAnalyzer extends BaseLanguageAnalyzer {
  constructor() {
    super("${language}", "tree-sitter-${language}");
  }
}
`;

const server = `import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath) {
    super({
      languageId: "${language}",
      command: "${language}-language-server",
      args: [],
      projectPath
    });
  }
}
`;

const templates = `import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("${language}", {
      idioms: [],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
`;

const prompt = `import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("${language}", {
      systemPrompt: "You are a ${language} expert.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
`;

writeFileSync(join(target, "src", "index.ts"), index);
writeFileSync(join(target, "src", "LanguageAnalyzer.ts"), analyzer);
writeFileSync(join(target, "src", "LanguageServer.ts"), server);
writeFileSync(join(target, "src", "CodeTemplates.ts"), templates);
writeFileSync(join(target, "src", "PromptEngineering.ts"), prompt);

console.log(`Created language scaffold at ${target}`);
