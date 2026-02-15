import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "dart", command: "dart-language-server", args: ["--stdio"], projectPath });
  }
}
