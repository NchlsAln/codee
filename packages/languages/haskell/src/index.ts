import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { haskellRuntime } from "./implementation/runtime";
import { haskellEcosystem } from "./implementation/ecosystem";
import { haskellIdioms } from "./implementation/idioms";
import { haskellAstPatterns } from "./analysis/ast-patterns";
import { inferHaskellTypes } from "./analysis/type-inference";

export const haskellDefinition: LanguageDefinition = {
  id: "haskell",
  name: "Haskell",
  extensions: [
    ".hs",
    ".lhs"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { haskellRuntime, haskellEcosystem, haskellIdioms, haskellAstPatterns, inferHaskellTypes };
