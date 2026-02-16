"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "php", command: "intelephense", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "php-cs-fixer",
            linter: "phpstan",
            typeChecker: "psalm",
            codeActions: ["organize-imports", "fix-all", "add-missing-types"]
        };
    }
}
exports.LanguageServer = LanguageServer;
