import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "objective-c", command: "objective-c-language-server", args: ["--stdio"], projectPath });
  }
}

