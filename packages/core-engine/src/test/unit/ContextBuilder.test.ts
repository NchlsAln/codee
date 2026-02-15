import { ContextBuilder } from "../../engine/ContextBuilder";
import { DEFAULT_CONFIG } from "../../config/defaults";
import { CodeContextAssembler, CodeContextOptions } from "../../memory/CodeContextAssembler";
import { ConversationStore } from "../../memory/ConversationStore";
import { LanguageRegistry } from "@codee/languages";

class FakeAssembler {
  lastOptions?: CodeContextOptions;

  async assemble(options: CodeContextOptions): Promise<string> {
    this.lastOptions = options;
    return "context";
  }
}

describe("ContextBuilder", () => {
  it("builds a system prompt from config and language hints", async () => {
    const assembler = new FakeAssembler();
    const registry = {
      getLanguage: () => ({
        promptEngineering: {
          getSystemPrompt: () => "TypeScript base prompt"
        }
      })
    } as unknown as LanguageRegistry;
    const conversationStore = {
      getConversationId: () => "conv-123"
    } as unknown as ConversationStore;

    const builder = new ContextBuilder(registry, assembler as CodeContextAssembler, conversationStore);
    const config = {
      ...DEFAULT_CONFIG,
      advanced: {
        ...DEFAULT_CONFIG.advanced,
        customInstructions: "Project rules",
        teamPrompts: ["Team rule"],
        systemPrompts: { typescript: "TS override" }
      }
    };

    const result = await builder.build({
      request: {
        sessionId: "session-1",
        prompt: "Help me",
        task: "chat",
        projectPath: "/repo"
      },
      languageId: "typescript",
      tokenLimit: 200,
      abortSignal: new AbortController().signal,
      config
    });

    expect(result).toBe("context");
    expect(assembler.lastOptions?.conversationId).toBe("conv-123");
    expect(assembler.lastOptions?.tokenBudget).toBe(200);

    const systemPrompt = assembler.lastOptions?.systemPrompt ?? "";
    expect(systemPrompt).toContain("TypeScript base prompt");
    expect(systemPrompt).toContain("Project rules");
    expect(systemPrompt).toContain("Team rule");
    expect(systemPrompt).toContain("TS override");
  });
});
