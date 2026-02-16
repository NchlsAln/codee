import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { zigRuntime } from "./implementation/runtime";
import { zigEcosystem } from "./implementation/ecosystem";
import { zigIdioms } from "./implementation/idioms";
import { zigAstPatterns } from "./analysis/ast-patterns";
import { inferZigTypes } from "./analysis/type-inference";

export const zigDefinition: LanguageDefinition = {
  id: "zig",
  name: "Zig",
  extensions: [
    ".zig"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { zigRuntime, zigEcosystem, zigIdioms, zigAstPatterns, inferZigTypes };
