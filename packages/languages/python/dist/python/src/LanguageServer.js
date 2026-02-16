"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({
            languageId: "python",
            command: "pylsp",
            args: [],
            projectPath
        });
        this.tooling = {
            formatter: "black",
            linter: "ruff",
            typeChecker: "mypy",
            codeActions: ["organize-imports", "add-missing-types", "fix-all"]
        };
    }
}
exports.LanguageServer = LanguageServer;
