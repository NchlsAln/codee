import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "clojure", command: "clojure-lsp", args: ["--stdio"], projectPath });
  }
}

