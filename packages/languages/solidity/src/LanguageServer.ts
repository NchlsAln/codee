import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "solidity", command: "solidity-language-server", args: ["--stdio"], projectPath });
  }
}
