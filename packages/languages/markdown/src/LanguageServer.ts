import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "markdown", command: "markdown-language-server", args: ["--stdio"], projectPath });
  }
}
