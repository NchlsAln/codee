"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "clojure", command: "clojure-lsp", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "cljfmt",
            linter: "clj-kondo",
            typeChecker: "clojure.spec",
            codeActions: ["organize-imports", "fix-all", "add-specs"]
        };
    }
}
exports.LanguageServer = LanguageServer;
