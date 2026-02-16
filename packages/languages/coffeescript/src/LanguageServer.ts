import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "coffeescript", command: "coffeescript-language-server", args: ["--stdio"], projectPath });
  }
}

