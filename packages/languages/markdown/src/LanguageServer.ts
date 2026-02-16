import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "markdown", command: "markdown-language-server", args: ["--stdio"], projectPath });
  }
}

