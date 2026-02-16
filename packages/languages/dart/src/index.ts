import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { dartRuntime } from "./implementation/runtime";
import { dartEcosystem } from "./implementation/ecosystem";
import { dartIdioms } from "./implementation/idioms";
import { dartAstPatterns } from "./analysis/ast-patterns";
import { inferDartTypes } from "./analysis/type-inference";

export const dartDefinition: LanguageDefinition = {
  id: "dart",
  name: "Dart",
  extensions: [
    ".dart"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { dartRuntime, dartEcosystem, dartIdioms, dartAstPatterns, inferDartTypes };
