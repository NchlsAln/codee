import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "terraform", command: "terraform-language-server", args: ["--stdio"], projectPath });
  }
}

