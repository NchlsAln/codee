import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { luaRuntime } from "./implementation/runtime";
import { luaEcosystem } from "./implementation/ecosystem";
import { luaIdioms } from "./implementation/idioms";
import { luaAstPatterns } from "./analysis/ast-patterns";
import { inferLuaTypes } from "./analysis/type-inference";

export const luaDefinition: LanguageDefinition = {
  id: "lua",
  name: "Lua",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { luaRuntime, luaEcosystem, luaIdioms, luaAstPatterns, inferLuaTypes };
