import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "vbnet", command: "vbnet-language-server", args: ["--stdio"], projectPath });
  }
}
