import { BaseLanguageServer } from "@codee/lang-common";

export interface ClojureToolingConfig {
  formatter: string;
  linter: string;
  typeChecker: string;
  codeActions: string[];
}

export class LanguageServer extends BaseLanguageServer {
  readonly tooling: ClojureToolingConfig;

  constructor(projectPath?: string) {
    super({ languageId: "clojure", command: "clojure-lsp", args: ["--stdio"], projectPath });

    this.tooling = {
      formatter: "cljfmt",
      linter: "clj-kondo",
      typeChecker: "clojure.spec",
      codeActions: ["organize-imports", "fix-all", "add-specs"]
    };
  }
}

