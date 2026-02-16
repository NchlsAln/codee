"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "sql", command: "sqls", args: ["-l", "en"], projectPath });
        this.tooling = {
            formatter: "sqlfluff format",
            linter: "sqlfluff lint",
            typeChecker: "engine-validate",
            codeActions: ["format", "fix-all", "organize-columns"]
        };
    }
}
exports.LanguageServer = LanguageServer;
