"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "nim", command: "nimlsp", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "nimpretty",
            linter: "nim check",
            typeChecker: "nim check",
            codeActions: ["organize-imports", "fix-all", "add-types"]
        };
    }
}
exports.LanguageServer = LanguageServer;
