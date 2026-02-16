import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { cssRuntime } from "./implementation/runtime";
import { cssEcosystem } from "./implementation/ecosystem";
import { cssIdioms } from "./implementation/idioms";
import { cssAstPatterns } from "./analysis/ast-patterns";
import { inferCssTypes } from "./analysis/type-inference";

export const cssDefinition: LanguageDefinition = {
  id: "css",
  name: "Css",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { cssRuntime, cssEcosystem, cssIdioms, cssAstPatterns, inferCssTypes };
