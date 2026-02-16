import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";

export const pythonDefinition: LanguageDefinition = {
  id: "python",
  name: "Python",
  extensions: [".py"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { pythonRuntime } from "./implementation/runtime";
export { pythonEcosystem } from "./implementation/ecosystem";
export { pythonIdioms } from "./implementation/idioms";
export { pythonAstPatterns } from "./analysis/ast-patterns";
export { inferPythonTypes } from "./analysis/type-inference";
export { djangoTemplate } from "./templates/django";
export { fastApiTemplate } from "./templates/fastapi";
export { pytorchTemplate } from "./templates/pytorch";