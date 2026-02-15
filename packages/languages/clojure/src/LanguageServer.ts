import { BaseLanguageServer } from "../../common/src/BaseLanguageServer";

export class LanguageServer extends BaseLanguageServer {
  constructor(projectPath?: string) {
    super({ languageId: "clojure", command: "clojure-language-server", args: ["--stdio"], projectPath });
  }
}
