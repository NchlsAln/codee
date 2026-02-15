import { BaseCodeTemplates } from "@codee/lang-common";
import { BaseLanguageAnalyzer } from "@codee/lang-common";
import { BaseLanguageServer } from "@codee/lang-common";
import { BasePromptEngineering } from "@codee/lang-common";
import { LanguageDefinition, LanguageRegistry, registerDefaultLanguages } from "../../index";

describe("LanguageRegistry", () => {
  it("detects default languages by extension", () => {
    const registry = new LanguageRegistry();
    registerDefaultLanguages(registry);

    expect(registry.detectLanguage("/repo/index.ts")?.id).toBe("typescript");
    expect(registry.detectLanguage("/repo/app.py")?.id).toBe("python");
  });

  it("starts and stops custom servers", async () => {
    class TestServer extends BaseLanguageServer {
      constructor(projectPath?: string) {
        super({
          languageId: "test",
          command: process.execPath,
          args: ["-e", "setInterval(() => {}, 1000)"],
          projectPath
        });
      }
    }

    const registry = new LanguageRegistry();
    const definition: LanguageDefinition = {
      id: "test",
      name: "Test",
      extensions: [".test"],
      serverFactory: (projectPath?: string) => new TestServer(projectPath),
      analyzerFactory: () => new BaseLanguageAnalyzer("test", "none"),
      templates: new BaseCodeTemplates("test", {
        idioms: [],
        templates: {},
        frameworkTemplates: {},
        testTemplates: {}
      }),
      promptEngineering: new BasePromptEngineering("test", {
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
