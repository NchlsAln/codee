import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "dockerfile", command: "dockerfile-language-server", args: ["--stdio"], projectPath });
  }
}

