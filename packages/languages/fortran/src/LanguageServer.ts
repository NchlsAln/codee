import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "fortran", command: "fortran-language-server", args: ["--stdio"], projectPath });
  }
}

