import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "ocaml", command: "ocaml-language-server", args: ["--stdio"], projectPath });
  }
}
