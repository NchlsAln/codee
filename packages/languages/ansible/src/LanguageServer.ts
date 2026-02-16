import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "ansible", command: "ansible-language-server", args: ["--stdio"], projectPath });
  }
}

