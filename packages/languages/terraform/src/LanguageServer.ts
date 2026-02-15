import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "terraform", command: "terraform-language-server", args: ["--stdio"], projectPath });
  }
}
