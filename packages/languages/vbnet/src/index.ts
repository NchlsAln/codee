import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { vbnetRuntime } from "./implementation/runtime";
import { vbnetEcosystem } from "./implementation/ecosystem";
import { vbnetIdioms } from "./implementation/idioms";
import { vbnetAstPatterns } from "./analysis/ast-patterns";
import { inferVbnetTypes } from "./analysis/type-inference";

export const vbnetDefinition: LanguageDefinition = {
  id: "vbnet",
  name: "Vbnet",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { vbnetRuntime, vbnetEcosystem, vbnetIdioms, vbnetAstPatterns, inferVbnetTypes };
