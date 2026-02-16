"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("javascript", {
            idioms: ["Use modern ES syntax.", "Prefer const and let.", "Avoid implicit globals."],
            templates: {},
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
