import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "php", command: "intelephense", args: ["--stdio"], projectPath });
  }
}

