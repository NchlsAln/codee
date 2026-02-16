import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { cRuntime } from "./implementation/runtime";
import { cEcosystem } from "./implementation/ecosystem";
import { cIdioms } from "./implementation/idioms";
import { cAstPatterns } from "./analysis/ast-patterns";
import { inferCTypes } from "./analysis/type-inference";

export const cDefinition: LanguageDefinition = {
  id: "c",
  name: "C",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { cRuntime, cEcosystem, cIdioms, cAstPatterns, inferCTypes };
