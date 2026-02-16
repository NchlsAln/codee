import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { sedRuntime } from "./implementation/runtime";
import { sedEcosystem } from "./implementation/ecosystem";
import { sedIdioms } from "./implementation/idioms";
import { sedAstPatterns } from "./analysis/ast-patterns";
import { inferSedTypes } from "./analysis/type-inference";

export const sedDefinition: LanguageDefinition = {
  id: "sed",
  name: "sed",
  extensions: [".sed"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { sedRuntime, sedEcosystem, sedIdioms, sedAstPatterns, inferSedTypes };
