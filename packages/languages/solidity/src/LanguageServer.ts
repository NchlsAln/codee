import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "solidity", command: "solidity-language-server", args: ["--stdio"], projectPath });
  }
}

