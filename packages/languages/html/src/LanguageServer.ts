import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "html",
      command: "vscode-html-language-server",
      args: ["--stdio"],
      projectPath
    });
  }
}

