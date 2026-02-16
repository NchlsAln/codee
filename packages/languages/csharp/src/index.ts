import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { csharpRuntime } from "./implementation/runtime";
import { csharpEcosystem } from "./implementation/ecosystem";
import { csharpIdioms } from "./implementation/idioms";
import { csharpAstPatterns } from "./analysis/ast-patterns";
import { inferCsharpTypes } from "./analysis/type-inference";

export const csharpDefinition: LanguageDefinition = {
  id: "csharp",
  name: "C#",
  extensions: [
    ".cs",
    ".csx"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { csharpRuntime, csharpEcosystem, csharpIdioms, csharpAstPatterns, inferCsharpTypes };
