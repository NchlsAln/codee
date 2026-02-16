import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { powershellRuntime } from "./implementation/runtime";
import { powershellEcosystem } from "./implementation/ecosystem";
import { powershellIdioms } from "./implementation/idioms";
import { powershellAstPatterns } from "./analysis/ast-patterns";
import { inferPowershellTypes } from "./analysis/type-inference";

export const powershellDefinition: LanguageDefinition = {
  id: "powershell",
  name: "Powershell",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { powershellRuntime, powershellEcosystem, powershellIdioms, powershellAstPatterns, inferPowershellTypes };
