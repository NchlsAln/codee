import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "crystal", command: "crystalline", args: ["--stdio"], projectPath });
  }
}

