"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_python_1 = require("@codee/lang-python");
describe("CodeTemplates", () => {
    it("exposes test templates", () => {
        const templates = new lang_python_1.CodeTemplates();
        const config = templates.getTemplates();
        expect(config.testTemplates.pytest).toContain("assert True");
    });
});
