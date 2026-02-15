import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "assembly", command: "assembly-language-server", args: ["--stdio"], projectPath });
  }
}
