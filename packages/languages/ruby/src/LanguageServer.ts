import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "ruby", command: "solargraph", args: ["--stdio"], projectPath });
  }
}

