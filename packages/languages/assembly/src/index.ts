import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { assemblyRuntime } from "./implementation/runtime";
import { assemblyEcosystem } from "./implementation/ecosystem";
import { assemblyIdioms } from "./implementation/idioms";
import { assemblyAstPatterns } from "./analysis/ast-patterns";
import { inferAssemblyTypes } from "./analysis/type-inference";

export const assemblyDefinition: LanguageDefinition = {
  id: "assembly",
  name: "Assembly",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { assemblyRuntime, assemblyEcosystem, assemblyIdioms, assemblyAstPatterns, inferAssemblyTypes };
