import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { yamlRuntime } from "./implementation/runtime";
import { yamlEcosystem } from "./implementation/ecosystem";
import { yamlIdioms } from "./implementation/idioms";
import { yamlAstPatterns } from "./analysis/ast-patterns";
import { inferYamlTypes } from "./analysis/type-inference";

export const yamlDefinition: LanguageDefinition = {
  id: "yaml",
  name: "Yaml",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { yamlRuntime, yamlEcosystem, yamlIdioms, yamlAstPatterns, inferYamlTypes };
