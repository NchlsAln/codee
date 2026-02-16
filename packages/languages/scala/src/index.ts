import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { scalaRuntime } from "./implementation/runtime";
import { scalaEcosystem } from "./implementation/ecosystem";
import { scalaIdioms } from "./implementation/idioms";
import { scalaAstPatterns } from "./analysis/ast-patterns";
import { inferScalaTypes } from "./analysis/type-inference";

export const scalaDefinition: LanguageDefinition = {
  id: "scala",
  name: "Scala",
  extensions: [
    ".scala",
    ".sc"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { scalaRuntime, scalaEcosystem, scalaIdioms, scalaAstPatterns, inferScalaTypes };
