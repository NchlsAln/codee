import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { jsonRuntime } from "./implementation/runtime";
import { jsonEcosystem } from "./implementation/ecosystem";
import { jsonIdioms } from "./implementation/idioms";
import { jsonAstPatterns } from "./analysis/ast-patterns";
import { inferJsonTypes } from "./analysis/type-inference";

export const jsonDefinition: LanguageDefinition = {
  id: "json",
  name: "JSON",
  extensions: [".json"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { jsonRuntime, jsonEcosystem, jsonIdioms, jsonAstPatterns, inferJsonTypes };
