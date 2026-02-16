"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({
            languageId: "sas",
            command: "sas-language-server",
            args: [],
            projectPath
        });
        this.tooling = {
            formatter: "sas-studio",
            linter: "sas-studio",
            typeChecker: "sas-compiler",
            codeActions: ["format", "fix-all"]
        };
    }
}
exports.LanguageServer = LanguageServer;
