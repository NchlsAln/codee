import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "dockerfile", command: "dockerfile-language-server", args: ["--stdio"], projectPath });
  }
}
