import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { scssRuntime } from "./implementation/runtime";
import { scssEcosystem } from "./implementation/ecosystem";
import { scssIdioms } from "./implementation/idioms";
import { scssAstPatterns } from "./analysis/ast-patterns";
import { inferSCSSTypes } from "./analysis/type-inference";

export const scssDefinition: LanguageDefinition = {
  id: "scss",
  name: "SCSS",
  extensions: [".scss"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { scssRuntime, scssEcosystem, scssIdioms, scssAstPatterns, inferSCSSTypes };
