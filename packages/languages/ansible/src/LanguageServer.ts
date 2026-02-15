import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "ansible", command: "ansible-language-server", args: ["--stdio"], projectPath });
  }
}
