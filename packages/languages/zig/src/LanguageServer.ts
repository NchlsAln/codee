import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "zig", command: "zls", args: ["--stdio"], projectPath });
  }
}

