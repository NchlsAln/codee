import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { kotlinRuntime } from "./implementation/runtime";
import { kotlinEcosystem } from "./implementation/ecosystem";
import { kotlinIdioms } from "./implementation/idioms";
import { kotlinAstPatterns } from "./analysis/ast-patterns";
import { inferKotlinTypes } from "./analysis/type-inference";

export const kotlinDefinition: LanguageDefinition = {
  id: "kotlin",
  name: "Kotlin",
  extensions: [
    ".kt",
    ".kts"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { kotlinRuntime, kotlinEcosystem, kotlinIdioms, kotlinAstPatterns, inferKotlinTypes };
