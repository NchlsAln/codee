import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "perl", command: "perl-language-server", args: ["--stdio"], projectPath });
  }
}
