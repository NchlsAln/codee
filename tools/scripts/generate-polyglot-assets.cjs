/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const forceMode = process.argv.includes("--force");

const LANGUAGES_DIR = path.join(root, "packages", "languages");
const POLYGLOT_DIR = path.join(root, "packages", "polyglot-knowledge", "src");
const DOCS_DIR = path.join(root, "docs", "languages");

const IGNORE_LANG_DIRS = new Set(["common", "src", "dist", ".turbo"]);
const CORE_TARGETS = ["python", "typescript", "rust", "go", "java", "cpp"];
const CORE_CONCEPTS = [
  "generics",
  "iterators",
  "closures",
  "pattern-matching",
  "concurrency",
  "error-handling",
  "memory-management",
  "object-oriented",
  "functional",
  "metaprogramming"
];

const writeFileIfNeeded = (filePath, content) => {
  if (fs.existsSync(filePath) && !forceMode) {
    return false;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf-8");
  return true;
};

const loadLanguageIds = () => {
  if (!fs.existsSync(LANGUAGES_DIR)) {
    return [];
  }
  return fs
    .readdirSync(LANGUAGES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !IGNORE_LANG_DIRS.has(name))
    .sort();
};

const generateLanguageIdsFile = (languageIds) => {
  const content = `// AUTO-GENERATED FILE. DO NOT EDIT.\nexport const ALL_LANGUAGE_IDS = ${JSON.stringify(
    languageIds,
    null,
    2
  )} as const;\nexport type LanguageId = typeof ALL_LANGUAGE_IDS[number];\n`;
  writeFileIfNeeded(path.join(POLYGLOT_DIR, "language-ids.ts"), content);
};

const generateAllLanguagesFile = (languageIds) => {
  const content = `// AUTO-GENERATED FILE. DO NOT EDIT.\nexport const ALL_LANGUAGES = ${JSON.stringify(
    languageIds,
    null,
    2
  )} as const;\nexport type LanguageId = typeof ALL_LANGUAGES[number];\n`;
  writeFileIfNeeded(path.join(root, "packages", "languages", "common", "src", "all-languages.ts"), content);
};

const generateMappings = (languageIds) => {
  const mappingsRoot = path.join(POLYGLOT_DIR, "mappings");
  languageIds.forEach((source) => {
    const dir = path.join(mappingsRoot, source);
    fs.mkdirSync(dir, { recursive: true });
    CORE_TARGETS.forEach((target) => {
      if (source === target) {
        return;
      }
      const toPath = path.join(dir, `to-${target}.ts`);
      const fromPath = path.join(dir, `from-${target}.ts`);
      const mappingTemplate = (direction) => `// AUTO-GENERATED FROM CONCEPT MATRIX\nimport type { ASTNode, ConceptMapping } from "../..";\n\nexport const ListComprehensionMapping: ConceptMapping = {\n  concept: "list-comprehension",\n  sourceLanguage: "${direction === "to" ? source : target}",\n  targetLanguage: "${direction === "to" ? target : source}",\n  confidence: 0.8,\n  transform: (ast: ASTNode) => {\n    void ast;\n    // TODO: Default implementation based on concept definition.\n    return ast;\n  }\n};\n`;
      writeFileIfNeeded(toPath, mappingTemplate("to"));
      writeFileIfNeeded(fromPath, mappingTemplate("from"));
    });
  });
};

const generateConceptFiles = (languageIds) => {
  const conceptsDir = path.join(POLYGLOT_DIR, "concepts");
  const coreConceptsContent = `// AUTO-GENERATED FILE. DO NOT EDIT.\nexport const CORE_CONCEPTS = ${JSON.stringify(
    CORE_CONCEPTS,
    null,
    2
  )} as const;\nexport type CoreConcept = typeof CORE_CONCEPTS[number];\n`;
  writeFileIfNeeded(path.join(conceptsDir, "core-concepts.ts"), coreConceptsContent);

  const coverage = languageIds
    .map((lang) => {
      const entries = CORE_CONCEPTS.map(
        (concept) => `      "${concept}": { confidence: 0.5, limitations: ["TODO: Fill ${lang}"] }`
      ).join(",\n");
      return `  "${lang}": {\n${entries}\n  }`;
    })
    .join(",\n");

  const coverageContent = `// AUTO-GENERATED FILE. DO NOT EDIT.\nimport type { LanguageId } from "../language-ids";\nimport type { CoreConcept } from "./core-concepts";\n\nexport type ConceptCoverage = {\n  confidence: number;\n  limitations: string[];\n};\n\nexport const COVERAGE_MATRIX: Record<LanguageId, Record<CoreConcept, ConceptCoverage>> = {\n${coverage}\n};\n`;
  writeFileIfNeeded(path.join(conceptsDir, "coverage-matrix.ts"), coverageContent);
};

const generateValidation = () => {
  const validatorsDir = path.join(POLYGLOT_DIR, "validators");
  const content = `// AUTO-GENERATED FILE. DO NOT EDIT.\nimport { translateCode } from "../index";\nimport { validateSyntax } from "./syntax-validator";\nimport { CORE_CONCEPTS } from "../concepts/core-concepts";\nimport type { LanguageId } from "../language-ids";\n\nexport interface ValidationResultEntry {\n  concept: string;\n  ok: boolean;\n  confidence: number;\n}\n\nexport interface ValidationReport {\n  source: LanguageId;\n  target: LanguageId;\n  results: ValidationResultEntry[];\n}\n\nexport async function validateLanguagePair(source: LanguageId, target: LanguageId): Promise<ValidationReport> {\n  const results: ValidationResultEntry[] = [];\n  for (const concept of CORE_CONCEPTS) {\n    const sourceCode = `// TODO: Provide example for ${source} and ${concept}`;\n    const translated = translateCode(source, target, sourceCode);\n    const syntax = validateSyntax(target, translated.output);\n    results.push({\n      concept,\n      ok: syntax.ok,\n      confidence: translated.confidence ?? 0\n    });\n  }\n  return { source, target, results };\n}\n\nexport async function validateAllLanguagePairs(languages: LanguageId[]): Promise<ValidationReport[]> {\n  const reports: ValidationReport[] = [];\n  for (const source of languages) {\n    for (const target of languages) {\n      if (source === target) {\n        continue;\n      }\n      // eslint-disable-next-line no-await-in-loop\n      const report = await validateLanguagePair(source, target);\n      reports.push(report);\n    }\n  }\n  return reports;\n}\n`;
  writeFileIfNeeded(path.join(validatorsDir, "scale-validation.ts"), content);
};

const generateDocs = (languageIds) => {
  const supportedRows = languageIds
    .map((lang) => `| ${lang} | scaffolded | pending |`)
    .join("\n");
  const supported = `# Supported Languages\n\n| Language | Status | Notes |\n| --- | --- | --- |\n${supportedRows}\n`;

  const header = ["Language", ...CORE_CONCEPTS.map((c) => c.replace(/-/g, " "))];
  const matrixRows = languageIds
    .map((lang) => `| ${lang} | ${CORE_CONCEPTS.map(() => "planned").join(" | ")} |`)
    .join("\n");
  const capabilities = `# Capabilities Matrix\n\n| ${header.join(" | ")} |\n| ${header.map(() => "---").join(" | ")} |\n${matrixRows}\n`;

  const adding = `# Adding A New Language\n\n1. Run scaffold generator:\n   - node tools/scripts/generate-language.cjs <language-id> <Language Name>\n2. Fill research checklist in the package README.\n3. Update templates, idioms, and prompt engineering.\n4. Run validation for target pairs.\n`;

  writeFileIfNeeded(path.join(DOCS_DIR, "supported.md"), supported);
  writeFileIfNeeded(path.join(DOCS_DIR, "capabilities.md"), capabilities);
  writeFileIfNeeded(path.join(DOCS_DIR, "adding-new.md"), adding);
};

const updateLanguagesPackageJson = (languageIds) => {
  const packagePath = path.join(root, "packages", "languages", "package.json");
  if (!fs.existsSync(packagePath)) {
    return;
  }
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
  const rootPackage = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf-8"));
  const version = rootPackage.version || pkg.version || "0.1.0";
  pkg.dependencies = pkg.dependencies || {};
  languageIds.forEach((lang) => {
    pkg.dependencies[`@codee/lang-${lang}`] = version;
  });
  pkg.dependencies["@codee/lang-common"] = version;
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
};

const updateLanguagesTsconfig = (languageIds) => {
  const tsconfigPath = path.join(root, "packages", "languages", "tsconfig.json");
  if (!fs.existsSync(tsconfigPath)) {
    return;
  }
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
  tsconfig.references = [
    { path: "./common" },
    ...languageIds.map((lang) => ({ path: `./${lang}` }))
  ];
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
};

const updateRootTsconfig = (languageIds) => {
  const tsconfigPath = path.join(root, "tsconfig.json");
  if (!fs.existsSync(tsconfigPath)) {
    return;
  }
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
  const baseRefs = tsconfig.references || [];
  const filtered = baseRefs.filter(
    (ref) =>
      !ref.path.startsWith("./packages/languages/") ||
      ref.path === "./packages/languages" ||
      ref.path === "./packages/languages/common"
  );
  const languageRefs = languageIds.map((lang) => ({ path: `./packages/languages/${lang}` }));
  tsconfig.references = [...filtered, { path: "./packages/languages/common" }, { path: "./packages/languages" }, ...languageRefs];
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
};

const run = () => {
  const languageIds = loadLanguageIds();
  if (languageIds.length === 0) {
    console.error("No language packages found.");
    process.exit(1);
  }
  generateLanguageIdsFile(languageIds);
  generateAllLanguagesFile(languageIds);
  generateMappings(languageIds);
  generateConceptFiles(languageIds);
  generateValidation();
  generateDocs(languageIds);
  updateLanguagesPackageJson(languageIds);
  updateLanguagesTsconfig(languageIds);
  updateRootTsconfig(languageIds);
  console.log(`Generated polyglot assets for ${languageIds.length} languages.`);
};

run();
