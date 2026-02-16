"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "crystal", command: "crystalline", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "crystal tool format",
            linter: "ameba",
            typeChecker: "crystal build",
            codeActions: ["organize-imports", "fix-all", "add-types"]
        };
    }
}
exports.LanguageServer = LanguageServer;
