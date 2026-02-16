import { BaseLanguageServer } from "@codee/lang-common";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "ocaml", command: "ocamllsp", args: ["--stdio"], projectPath });
  }
}

