import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { dockerfileRuntime } from "./implementation/runtime";
import { dockerfileEcosystem } from "./implementation/ecosystem";
import { dockerfileIdioms } from "./implementation/idioms";
import { dockerfileAstPatterns } from "./analysis/ast-patterns";
import { inferDockerfileTypes } from "./analysis/type-inference";

export const dockerfileDefinition: LanguageDefinition = {
  id: "dockerfile",
  name: "Dockerfile",
  extensions: ["Dockerfile", ".dockerfile", "Dockerfile.*"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering(),
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export {
  dockerfileRuntime,
  dockerfileEcosystem,
  dockerfileIdioms,
  dockerfileAstPatterns,
  inferDockerfileTypes,
};
