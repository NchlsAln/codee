import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "json", command: "json-language-server", args: ["--stdio"], projectPath });
  }
}

