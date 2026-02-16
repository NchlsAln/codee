"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "r", command: "r-language-server", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "styler",
            linter: "lintr",
            typeChecker: "lintr",
            codeActions: ["organize-imports", "fix-all", "add-roxygen"]
        };
    }
}
exports.LanguageServer = LanguageServer;
