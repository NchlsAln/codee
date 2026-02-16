import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "bash", command: "bash-language-server", args: ["--stdio"], projectPath });
  }
}

