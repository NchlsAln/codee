import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { crystalRuntime } from "./implementation/runtime";
import { crystalEcosystem } from "./implementation/ecosystem";
import { crystalIdioms } from "./implementation/idioms";
import { crystalAstPatterns } from "./analysis/ast-patterns";
import { inferCrystalTypes } from "./analysis/type-inference";

export const crystalDefinition: LanguageDefinition = {
  id: "crystal",
  name: "Crystal",
  extensions: [
    ".cr"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { crystalRuntime, crystalEcosystem, crystalIdioms, crystalAstPatterns, inferCrystalTypes };
