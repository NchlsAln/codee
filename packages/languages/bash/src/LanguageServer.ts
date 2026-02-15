import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "bash", command: "bash-language-server", args: ["--stdio"], projectPath });
  }
}
