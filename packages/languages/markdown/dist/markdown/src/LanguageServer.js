"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    constructor(projectPath) {
        super({ languageId: "markdown", command: "markdown-language-server", args: ["--stdio"], projectPath });
    }
}
exports.LanguageServer = LanguageServer;
