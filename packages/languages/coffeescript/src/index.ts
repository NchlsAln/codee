import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { coffeescriptRuntime } from "./implementation/runtime";
import { coffeescriptEcosystem } from "./implementation/ecosystem";
import { coffeescriptIdioms } from "./implementation/idioms";
import { coffeescriptAstPatterns } from "./analysis/ast-patterns";
import { inferCoffeescriptTypes } from "./analysis/type-inference";

export const coffeescriptDefinition: LanguageDefinition = {
  id: "coffeescript",
  name: "Coffeescript",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { coffeescriptRuntime, coffeescriptEcosystem, coffeescriptIdioms, coffeescriptAstPatterns, inferCoffeescriptTypes };
