import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { bashRuntime } from "./implementation/runtime";
import { bashEcosystem } from "./implementation/ecosystem";
import { bashIdioms } from "./implementation/idioms";
import { bashAstPatterns } from "./analysis/ast-patterns";
import { inferBashTypes } from "./analysis/type-inference";

export const bashDefinition: LanguageDefinition = {
  id: "bash",
  name: "Bash",
  extensions: [".sh", ".bash", ".bashrc", ".bash_profile"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { bashRuntime, bashEcosystem, bashIdioms, bashAstPatterns, inferBashTypes };
