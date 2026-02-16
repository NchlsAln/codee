import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { rubyRuntime } from "./implementation/runtime";
import { rubyEcosystem } from "./implementation/ecosystem";
import { rubyIdioms } from "./implementation/idioms";
import { rubyAstPatterns } from "./analysis/ast-patterns";
import { inferRubyTypes } from "./analysis/type-inference";

export const rubyDefinition: LanguageDefinition = {
  id: "ruby",
  name: "Ruby",
  extensions: [
    ".rb",
    ".rake",
    ".ru"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { rubyRuntime, rubyEcosystem, rubyIdioms, rubyAstPatterns, inferRubyTypes };
