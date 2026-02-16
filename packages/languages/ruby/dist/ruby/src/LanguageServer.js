"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "ruby", command: "solargraph", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "rubocop",
            linter: "rubocop",
            typeChecker: "sorbet",
            codeActions: ["organize-imports", "fix-all", "add-signatures"]
        };
    }
}
exports.LanguageServer = LanguageServer;
