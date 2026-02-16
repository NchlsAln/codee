import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "erlang", command: "erlang_ls", args: ["--stdio"], projectPath });
  }
}

