"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "swift", command: "sourcekit-lsp", args: [], projectPath });
        this.tooling = {
            formatter: "swiftformat",
            linter: "swiftlint",
            codeActions: ["organize-imports", "fix-all", "convert-to-async"]
        };
    }
}
exports.LanguageServer = LanguageServer;
