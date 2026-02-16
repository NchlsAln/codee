import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";

export const rustDefinition: LanguageDefinition = {
  id: "rust",
  name: "Rust",
  extensions: [".rs"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { rustRuntime } from "./implementation/runtime";
export { rustEcosystem } from "./implementation/ecosystem";
export { rustIdioms } from "./implementation/idioms";
export { rustAstPatterns } from "./analysis/ast-patterns";
export { inferRustTypes } from "./analysis/type-inference";
export { axumTemplate } from "./templates/axum";
export { cliTemplate } from "./templates/cli";
