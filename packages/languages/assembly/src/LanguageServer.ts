import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "assembly", command: "assembly-language-server", args: ["--stdio"], projectPath });
  }
}

