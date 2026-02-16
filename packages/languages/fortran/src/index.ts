import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { fortranRuntime } from "./implementation/runtime";
import { fortranEcosystem } from "./implementation/ecosystem";
import { fortranIdioms } from "./implementation/idioms";
import { fortranAstPatterns } from "./analysis/ast-patterns";
import { inferFortranTypes } from "./analysis/type-inference";

export const fortranDefinition: LanguageDefinition = {
  id: "fortran",
  name: "Fortran",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { fortranRuntime, fortranEcosystem, fortranIdioms, fortranAstPatterns, inferFortranTypes };
