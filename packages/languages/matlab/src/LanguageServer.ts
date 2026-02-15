import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "matlab", command: "matlab-language-server", args: ["--stdio"], projectPath });
  }
}
