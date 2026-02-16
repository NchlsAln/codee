import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";

export const cppDefinition: LanguageDefinition = {
  id: "cpp",
  name: "C++",
  extensions: [".cpp", ".cc", ".cxx", ".hpp", ".h"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { cppRuntime } from "./implementation/runtime";
export { cppEcosystem } from "./implementation/ecosystem";
export { cppIdioms } from "./implementation/idioms";
export { cppAstPatterns } from "./analysis/ast-patterns";
export { inferCppTypes } from "./analysis/type-inference";
export { containersTemplate, smartPointersTemplate, concurrencyTemplate } from "./templates/stdlib";
export { rangesTemplate, conceptsTemplate, coroutinesTemplate } from "./templates/modern-cpp";
export { boostTemplate } from "./templates/boost";
export { qtTemplate } from "./templates/qt";
export { embeddedTemplate } from "./templates/embedded";
