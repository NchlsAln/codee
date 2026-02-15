"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_common_1 = require("@codee/lang-common");
const lang_common_2 = require("@codee/lang-common");
const lang_common_3 = require("@codee/lang-common");
const lang_common_4 = require("@codee/lang-common");
const index_1 = require("../../index");
describe("LanguageRegistry", () => {
    it("detects default languages by extension", () => {
        const registry = new index_1.LanguageRegistry();
        (0, index_1.registerDefaultLanguages)(registry);
        expect(registry.detectLanguage("/repo/index.ts")?.id).toBe("typescript");
        expect(registry.detectLanguage("/repo/app.py")?.id).toBe("python");
    });
    it("starts and stops custom servers", async () => {
        class TestServer extends lang_common_3.BaseLanguageServer {
            constructor(projectPath) {
                super({
                    languageId: "test",
                    command: process.execPath,
                    args: ["-e", "setInterval(() => {}, 1000)"],
                    projectPath
                });
            }
        }
        const registry = new index_1.LanguageRegistry();
        const definition = {
            id: "test",
            name: "Test",
            extensions: [".test"],
            serverFactory: (projectPath) => new TestServer(projectPath),
            analyzerFactory: () => new lang_common_2.BaseLanguageAnalyzer("test", "none"),
            templates: new lang_common_1.BaseCodeTemplates("test", {
                idioms: [],
                templates: {},
                frameworkTemplates: {},
                testTemplates: {}
            }),
            promptEngineering: new lang_common_4.BasePromptEngineering("test", {
                systemPrompt: "Test prompt",
                fewShotExamples: [],
                contextHints: []
            })
        };
        registry.registerLanguage(definition);
        const server = registry.getOrStartServer("/repo", "test");
        expect(server).toBeDefined();
        expect(registry.listActiveServers("/repo")).toHaveLength(1);
        await registry.stopServer("/repo", "test");
        expect(registry.listActiveServers("/repo")).toHaveLength(0);
    });
});
