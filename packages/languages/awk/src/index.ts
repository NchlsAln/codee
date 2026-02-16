import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { awkRuntime } from "./implementation/runtime";
import { awkEcosystem } from "./implementation/ecosystem";
import { awkIdioms } from "./implementation/idioms";
import { awkAstPatterns } from "./analysis/ast-patterns";
import { inferAWKTypes } from "./analysis/type-inference";

export const awkDefinition: LanguageDefinition = {
  id: "awk",
  name: "AWK",
  extensions: [".awk", ".gawk"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { awkRuntime, awkEcosystem, awkIdioms, awkAstPatterns, inferAWKTypes };
