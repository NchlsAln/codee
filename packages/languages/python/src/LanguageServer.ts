import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "python",
      command: "pylsp",
      args: [],
      projectPath
    });
  }
}