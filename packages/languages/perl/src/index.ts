import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { perlRuntime } from "./implementation/runtime";
import { perlEcosystem } from "./implementation/ecosystem";
import { perlIdioms } from "./implementation/idioms";
import { perlAstPatterns } from "./analysis/ast-patterns";
import { inferPerlTypes } from "./analysis/type-inference";

export const perlDefinition: LanguageDefinition = {
  id: "perl",
  name: "Perl",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { perlRuntime, perlEcosystem, perlIdioms, perlAstPatterns, inferPerlTypes };
