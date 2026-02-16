import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { fsharpRuntime } from "./implementation/runtime";
import { fsharpEcosystem } from "./implementation/ecosystem";
import { fsharpIdioms } from "./implementation/idioms";
import { fsharpAstPatterns } from "./analysis/ast-patterns";
import { inferFsharpTypes } from "./analysis/type-inference";

export const fsharpDefinition: LanguageDefinition = {
  id: "fsharp",
  name: "Fsharp",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { fsharpRuntime, fsharpEcosystem, fsharpIdioms, fsharpAstPatterns, inferFsharpTypes };
