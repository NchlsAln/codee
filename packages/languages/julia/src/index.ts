import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { juliaRuntime } from "./implementation/runtime";
import { juliaEcosystem } from "./implementation/ecosystem";
import { juliaIdioms } from "./implementation/idioms";
import { juliaAstPatterns } from "./analysis/ast-patterns";
import { inferJuliaTypes } from "./analysis/type-inference";

export const juliaDefinition: LanguageDefinition = {
  id: "julia",
  name: "Julia",
  extensions: [
    ".jl"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { juliaRuntime, juliaEcosystem, juliaIdioms, juliaAstPatterns, inferJuliaTypes };
