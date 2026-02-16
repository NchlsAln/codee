import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { markdownRuntime } from "./implementation/runtime";
import { markdownEcosystem } from "./implementation/ecosystem";
import { markdownIdioms } from "./implementation/idioms";
import { markdownAstPatterns } from "./analysis/ast-patterns";
import { inferMarkdownTypes } from "./analysis/type-inference";

export const markdownDefinition: LanguageDefinition = {
  id: "markdown",
  name: "Markdown",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { markdownRuntime, markdownEcosystem, markdownIdioms, markdownAstPatterns, inferMarkdownTypes };
