import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { objectiveCRuntime } from "./implementation/runtime";
import { objectiveCEcosystem } from "./implementation/ecosystem";
import { objectiveCIdioms } from "./implementation/idioms";
import { objectiveCAstPatterns } from "./analysis/ast-patterns";
import { inferObjectiveCTypes } from "./analysis/type-inference";

export const objectiveCDefinition: LanguageDefinition = {
  id: "objective-c",
  name: "Objective C",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { objectiveCRuntime, objectiveCEcosystem, objectiveCIdioms, objectiveCAstPatterns, inferObjectiveCTypes };
