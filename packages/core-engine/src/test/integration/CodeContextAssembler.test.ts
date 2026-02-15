import path from "node:path";
import { CodeContextAssembler } from "../../memory/CodeContextAssembler";
import { ConversationMemory } from "../../memory/ConversationMemory";
import { ProjectIndex } from "../../memory/ProjectIndex";
import { SmartCompression } from "../../memory/SmartCompression";
import { EmbeddingProvider, VectorMemory } from "../../memory/VectorMemory";

class StaticEmbeddingProvider implements EmbeddingProvider {
  async embed(texts: string[]): Promise<number[][]> {
    return texts.map((text) => (text.includes("greet") ? [1, 0] : [0, 1]));
  }
}

describe("CodeContextAssembler", () => {
  it("builds a multi-section prompt", async () => {
    const projectPath = path.resolve(__dirname, "../fixtures/sample-project");
    const projectIndex = new ProjectIndex();
    await projectIndex.scan(projectPath);

    const vectorMemory = new VectorMemory(new StaticEmbeddingProvider(), projectIndex);
    await vectorMemory.indexProject(projectPath);

    const conversationMemory = new ConversationMemory();
    const conversation = await conversationMemory.createConversation("sample", "Sample");
    await conversationMemory.addMessage({
      id: "msg-1",
      conversationId: conversation.id,
      role: "user",
      content: "Explain greet",
      tokens: 2,
      timestamp: Date.now()
    });

    const assembler = new CodeContextAssembler(
      projectIndex,
      vectorMemory,
      conversationMemory,
      new SmartCompression()
    );

    const output = await assembler.assemble({
      projectPath,
      filePath: path.join(projectPath, "src", "index.ts"),
      userQuery: "How does greet work",
      systemPrompt: "System prompt",
      tokenBudget: 2000,
      conversationId: conversation.id
    });

    expect(output).toContain("## System");
    expect(output).toContain("## Project Summary");
    expect(output).toContain("## Current File");
    expect(output).toContain("## Relevant Files");
    expect(output).toContain("## Conversation History");
    expect(output).toContain("## User Query");
  });
});
