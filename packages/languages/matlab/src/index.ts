import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { matlabRuntime } from "./implementation/runtime";
import { matlabEcosystem } from "./implementation/ecosystem";
import { matlabIdioms } from "./implementation/idioms";
import { matlabAstPatterns } from "./analysis/ast-patterns";
import { inferMatlabTypes } from "./analysis/type-inference";

export const matlabDefinition: LanguageDefinition = {
  id: "matlab",
  name: "MATLAB",
  extensions: [
    ".m",
    ".mlx"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { matlabRuntime, matlabEcosystem, matlabIdioms, matlabAstPatterns, inferMatlabTypes };
