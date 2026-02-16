import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { solidityRuntime } from "./implementation/runtime";
import { solidityEcosystem } from "./implementation/ecosystem";
import { solidityIdioms } from "./implementation/idioms";
import { solidityAstPatterns } from "./analysis/ast-patterns";
import { inferSolidityTypes } from "./analysis/type-inference";

export const solidityDefinition: LanguageDefinition = {
  id: "solidity",
  name: "Solidity",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { solidityRuntime, solidityEcosystem, solidityIdioms, solidityAstPatterns, inferSolidityTypes };
