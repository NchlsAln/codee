import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "c", command: "c-language-server", args: ["--stdio"], projectPath });
  }
}

