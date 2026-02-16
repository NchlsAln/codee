"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageServer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageServer extends lang_common_1.BaseLanguageServer {
    tooling;
    constructor(projectPath) {
        super({ languageId: "java", command: "jdtls", args: [], projectPath });
        this.tooling = {
            formatter: "google-java-format",
            linter: "spotbugs",
            codeActions: ["organize-imports", "fix-all", "generate-getters-setters"]
        };
    }
}
exports.LanguageServer = LanguageServer;
