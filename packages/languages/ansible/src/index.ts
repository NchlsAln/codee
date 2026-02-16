import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { ansibleRuntime } from "./implementation/runtime";
import { ansibleEcosystem } from "./implementation/ecosystem";
import { ansibleIdioms } from "./implementation/idioms";
import { ansibleAstPatterns } from "./analysis/ast-patterns";
import { inferAnsibleTypes } from "./analysis/type-inference";

export const ansibleDefinition: LanguageDefinition = {
  id: "ansible",
  name: "Ansible",
  extensions: [".yml", ".yaml", ".ansible.yml"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering(),
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { ansibleRuntime, ansibleEcosystem, ansibleIdioms, ansibleAstPatterns, inferAnsibleTypes };
