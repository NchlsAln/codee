import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { groovyRuntime } from "./implementation/runtime";
import { groovyEcosystem } from "./implementation/ecosystem";
import { groovyIdioms } from "./implementation/idioms";
import { groovyAstPatterns } from "./analysis/ast-patterns";
import { inferGroovyTypes } from "./analysis/type-inference";

export const groovyDefinition: LanguageDefinition = {
  id: "groovy",
  name: "Groovy",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { groovyRuntime, groovyEcosystem, groovyIdioms, groovyAstPatterns, inferGroovyTypes };
