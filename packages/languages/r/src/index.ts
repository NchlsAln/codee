import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { rRuntime } from "./implementation/runtime";
import { rEcosystem } from "./implementation/ecosystem";
import { rIdioms } from "./implementation/idioms";
import { rAstPatterns } from "./analysis/ast-patterns";
import { inferRTypes } from "./analysis/type-inference";

export const rDefinition: LanguageDefinition = {
  id: "r",
  name: "R",
  extensions: [
    ".r",
    ".R",
    ".Rmd"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { rRuntime, rEcosystem, rIdioms, rAstPatterns, inferRTypes };
