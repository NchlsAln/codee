import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";

export const typescriptDefinition: LanguageDefinition = {
  id: "typescript",
  name: "TypeScript",
  extensions: [".ts", ".tsx"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { typescriptRuntime } from "./implementation/runtime";
export { typescriptEcosystem } from "./implementation/ecosystem";
export { typescriptIdioms } from "./implementation/idioms";
export { typescriptAstPatterns } from "./analysis/ast-patterns";
export { inferTypeScriptTypes } from "./analysis/type-inference";
export { reactTemplate } from "./templates/react";
export { nextjsTemplate } from "./templates/nextjs";
export { nestjsTemplate } from "./templates/nestjs";
