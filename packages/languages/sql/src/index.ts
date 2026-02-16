import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { sqlRuntime } from "./implementation/runtime";
import { sqlEcosystem } from "./implementation/ecosystem";
import { sqlIdioms } from "./implementation/idioms";
import { sqlAstPatterns } from "./analysis/ast-patterns";
import { inferSqlTypes } from "./analysis/type-inference";

export const sqlDefinition: LanguageDefinition = {
  id: "sql",
  name: "SQL",
  extensions: [
    ".sql"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { sqlRuntime, sqlEcosystem, sqlIdioms, sqlAstPatterns, inferSqlTypes };
