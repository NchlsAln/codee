import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "coffeescript", command: "coffeescript-language-server", args: ["--stdio"], projectPath });
  }
}
