"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "zig", command: "zls", args: ["--stdio"], projectPath });
        this.tooling = {
            formatter: "zig fmt",
            linter: "zig fmt --check",
            typeChecker: "zig build",
            codeActions: ["organize-imports", "fix-all", "add-error-context"]
        };
    }
}
exports.LanguageServer = LanguageServer;
