import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({
      languageId: "typescript",
      command: "typescript-language-server",
      args: ["--stdio"],
      projectPath
    });
  }
}