import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { phpRuntime } from "./implementation/runtime";
import { phpEcosystem } from "./implementation/ecosystem";
import { phpIdioms } from "./implementation/idioms";
import { phpAstPatterns } from "./analysis/ast-patterns";
import { inferPhpTypes } from "./analysis/type-inference";

export const phpDefinition: LanguageDefinition = {
  id: "php",
  name: "PHP",
  extensions: [
    ".php",
    ".phtml",
    ".phpt"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { phpRuntime, phpEcosystem, phpIdioms, phpAstPatterns, inferPhpTypes };
