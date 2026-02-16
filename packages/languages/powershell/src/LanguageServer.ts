import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "powershell",
      command: "powershell-editor-services",
      args: ["--stdio"],
      projectPath
    });
  }
}

