import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "xml", command: "xml-language-server", args: ["--stdio"], projectPath });
  }
}
