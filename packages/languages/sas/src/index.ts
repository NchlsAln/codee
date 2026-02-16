import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { sasRuntime } from "./implementation/runtime";
import { sasEcosystem } from "./implementation/ecosystem";
import { sasIdioms } from "./implementation/idioms";
import { sasAstPatterns } from "./analysis/ast-patterns";
import { inferSASTypes } from "./analysis/type-inference";

export const sasDefinition: LanguageDefinition = {
  id: "sas",
  name: "SAS",
  extensions: [".sas", ".sas7bdat", ".sas7bcat"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { sasRuntime, sasEcosystem, sasIdioms, sasAstPatterns, inferSASTypes };
