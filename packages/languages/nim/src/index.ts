import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { nimRuntime } from "./implementation/runtime";
import { nimEcosystem } from "./implementation/ecosystem";
import { nimIdioms } from "./implementation/idioms";
import { nimAstPatterns } from "./analysis/ast-patterns";
import { inferNimTypes } from "./analysis/type-inference";

export const nimDefinition: LanguageDefinition = {
  id: "nim",
  name: "Nim",
  extensions: [
    ".nim",
    ".nims",
    ".nimble"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { nimRuntime, nimEcosystem, nimIdioms, nimAstPatterns, inferNimTypes };
