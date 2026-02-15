import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "javascript", command: "javascript-language-server", args: ["--stdio"], projectPath });
  }
}