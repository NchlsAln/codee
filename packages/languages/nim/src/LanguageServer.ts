import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "nim", command: "nim-language-server", args: ["--stdio"], projectPath });
  }
}
