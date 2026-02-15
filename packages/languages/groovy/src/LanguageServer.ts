import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "groovy", command: "groovy-language-server", args: ["--stdio"], projectPath });
  }
}
