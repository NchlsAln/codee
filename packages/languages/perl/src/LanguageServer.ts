import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "perl", command: "perl-language-server", args: ["--stdio"], projectPath });
  }
}

