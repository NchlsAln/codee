"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "julia", command: "julia-language-server", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "juliafmt",
            linter: "aqua",
            typeChecker: "jet",
            codeActions: ["organize-imports", "fix-all", "add-types"]
        };
    }
}
exports.LanguageServer = LanguageServer;
