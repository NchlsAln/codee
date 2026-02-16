import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";

export const goDefinition: LanguageDefinition = {
  id: "go",
  name: "Go",
  extensions: [".go"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { goRuntime } from "./implementation/runtime";
export { goEcosystem } from "./implementation/ecosystem";
export { goIdioms } from "./implementation/idioms";
export { goAstPatterns } from "./analysis/ast-patterns";
export { inferGoTypes } from "./analysis/type-inference";
export { cliTemplate } from "./templates/cli";
export { stdlibTemplate } from "./templates/stdlib";
export { gorillaTemplate } from "./templates/gorilla";
export { ginTemplate } from "./templates/gin";
