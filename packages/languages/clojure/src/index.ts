import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { clojureRuntime } from "./implementation/runtime";
import { clojureEcosystem } from "./implementation/ecosystem";
import { clojureIdioms } from "./implementation/idioms";
import { clojureAstPatterns } from "./analysis/ast-patterns";
import { inferClojureTypes } from "./analysis/type-inference";

export const clojureDefinition: LanguageDefinition = {
  id: "clojure",
  name: "Clojure",
  extensions: [
    ".clj",
    ".cljs",
    ".cljc",
    ".edn"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { clojureRuntime, clojureEcosystem, clojureIdioms, clojureAstPatterns, inferClojureTypes };
