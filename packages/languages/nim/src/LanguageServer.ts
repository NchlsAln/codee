import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "nim", command: "nimlangserver", args: ["--stdio"], projectPath });
  }
}

