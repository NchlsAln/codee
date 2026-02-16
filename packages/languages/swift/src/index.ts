import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { swiftRuntime } from "./implementation/runtime";
import { swiftEcosystem } from "./implementation/ecosystem";
import { swiftIdioms } from "./implementation/idioms";
import { swiftAstPatterns } from "./analysis/ast-patterns";
import { inferSwiftTypes } from "./analysis/type-inference";

export const swiftDefinition: LanguageDefinition = {
  id: "swift",
  name: "Swift",
  extensions: [
    ".swift"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { swiftRuntime, swiftEcosystem, swiftIdioms, swiftAstPatterns, inferSwiftTypes };
