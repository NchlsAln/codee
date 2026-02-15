import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "yaml", command: "yaml-language-server", args: ["--stdio"], projectPath });
  }
}
