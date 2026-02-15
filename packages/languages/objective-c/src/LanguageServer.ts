import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "objective-c", command: "objective-c-language-server", args: ["--stdio"], projectPath });
  }
}
