import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { htmlRuntime } from "./implementation/runtime";
import { htmlEcosystem } from "./implementation/ecosystem";
import { htmlIdioms } from "./implementation/idioms";
import { htmlAstPatterns } from "./analysis/ast-patterns";
import { inferHtmlTypes } from "./analysis/type-inference";

export const htmlDefinition: LanguageDefinition = {
  id: "html",
  name: "Html",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { htmlRuntime, htmlEcosystem, htmlIdioms, htmlAstPatterns, inferHtmlTypes };
