import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { chefRuntime } from "./implementation/runtime";
import { chefEcosystem } from "./implementation/ecosystem";
import { chefIdioms } from "./implementation/idioms";
import { chefAstPatterns } from "./analysis/ast-patterns";
import { inferChefTypes } from "./analysis/type-inference";

export const chefDefinition: LanguageDefinition = {
  id: "chef",
  name: "Chef",
  extensions: [".rb", ".erb"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering(),
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { chefRuntime, chefEcosystem, chefIdioms, chefAstPatterns, inferChefTypes };
