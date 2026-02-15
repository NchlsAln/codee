import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "haskell", command: "haskell-language-server", args: ["--stdio"], projectPath });
  }
}
