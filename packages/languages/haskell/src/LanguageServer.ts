import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "haskell", command: "haskell-language-server", args: ["--stdio"], projectPath });
  }
}

