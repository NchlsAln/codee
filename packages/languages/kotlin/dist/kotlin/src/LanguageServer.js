"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "kotlin", command: "kotlin-language-server", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "ktlint",
            linter: "detekt",
            codeActions: ["organize-imports", "fix-all", "convert-to-expression-body"]
        };
    }
}
exports.LanguageServer = LanguageServer;
