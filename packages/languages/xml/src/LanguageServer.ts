import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "xml", command: "xml-language-server", args: ["--stdio"], projectPath });
  }
}

