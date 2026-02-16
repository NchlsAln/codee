import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "css", command: "css-language-server", args: ["--stdio"], projectPath });
  }
}

