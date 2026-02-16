import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "r", command: "r-language-server", args: ["--stdio"], projectPath });
  }
}

