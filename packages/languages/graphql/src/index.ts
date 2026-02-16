import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { graphqlRuntime } from "./implementation/runtime";
import { graphqlEcosystem } from "./implementation/ecosystem";
import { graphqlIdioms } from "./implementation/idioms";
import { graphqlAstPatterns } from "./analysis/ast-patterns";
import { inferGraphqlTypes } from "./analysis/type-inference";

export const graphqlDefinition: LanguageDefinition = {
  id: "graphql",
  name: "Graphql",
  extensions: [
  ".ext"
],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { graphqlRuntime, graphqlEcosystem, graphqlIdioms, graphqlAstPatterns, inferGraphqlTypes };
