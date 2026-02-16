import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "matlab", command: "matlab-language-server", args: ["--stdio"], projectPath });
  }
}

