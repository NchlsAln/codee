"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "erlang", command: "erlang_ls", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "erlfmt",
            linter: "elvis",
            typeChecker: "dialyzer",
            codeActions: ["organize-imports", "fix-all", "add-specs"]
        };
    }
}
exports.LanguageServer = LanguageServer;
