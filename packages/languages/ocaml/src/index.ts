import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";
import { ocamlRuntime } from "./implementation/runtime";
import { ocamlEcosystem } from "./implementation/ecosystem";
import { ocamlIdioms } from "./implementation/idioms";
import { ocamlAstPatterns } from "./analysis/ast-patterns";
import { inferOcamlTypes } from "./analysis/type-inference";

export const ocamlDefinition: LanguageDefinition = {
  id: "ocaml",
  name: "OCaml",
  extensions: [
    ".ml",
    ".mli"
  ],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering()
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { ocamlRuntime, ocamlEcosystem, ocamlIdioms, ocamlAstPatterns, inferOcamlTypes };
