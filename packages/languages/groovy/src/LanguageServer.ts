import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "groovy", command: "groovy-language-server", args: ["--stdio"], projectPath });
  }
}
