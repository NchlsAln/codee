import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "swift", command: "swift-language-server", args: ["--stdio"], projectPath });
  }
}
