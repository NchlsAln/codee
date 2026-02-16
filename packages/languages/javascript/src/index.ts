import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { javascriptRuntime } from "./implementation/runtime";
import { javascriptEcosystem } from "./implementation/ecosystem";
import { javascriptIdioms } from "./implementation/idioms";
import { javascriptAstPatterns } from "./analysis/ast-patterns";
import { inferJavascriptTypes } from "./analysis/type-inference";

export const javascriptDefinition: LanguageDefinition = {
  id: "javascript",
  name: "Javascript",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { javascriptRuntime, javascriptEcosystem, javascriptIdioms, javascriptAstPatterns, inferJavascriptTypes };
