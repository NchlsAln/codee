import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { puppetRuntime } from "./implementation/runtime";
import { puppetEcosystem } from "./implementation/ecosystem";
import { puppetIdioms } from "./implementation/idioms";
import { puppetAstPatterns } from "./analysis/ast-patterns";
import { inferPuppetTypes } from "./analysis/type-inference";

export const puppetDefinition: LanguageDefinition = {
  id: "puppet",
  name: "Puppet",
  extensions: [".pp"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering(),
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { puppetRuntime, puppetEcosystem, puppetIdioms, puppetAstPatterns, inferPuppetTypes };
