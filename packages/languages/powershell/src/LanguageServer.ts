import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "powershell", command: "powershell-language-server", args: ["--stdio"], projectPath });
  }
}
