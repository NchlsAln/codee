import { EmbeddingProvider, VectorMemory } from "../../memory/VectorMemory";
import { ProjectIndex } from "../../memory/ProjectIndex";

class StaticEmbeddingProvider implements EmbeddingProvider {
  async embed(texts: string[]): Promise<number[][]> {
    return texts.map((text) => (text.includes("alpha") ? [1, 0] : [0, 1]));
  }
}

describe("VectorMemory", () => {
  it("returns most relevant chunks", async () => {
    const memory = new VectorMemory(new StaticEmbeddingProvider(), new ProjectIndex());
    await memory.indexFile("/repo/file.ts", "function alpha() {}\n\nfunction beta() {}\n");

    const results = await memory.search("alpha", 2);

    expect(results).toHaveLength(2);
    expect(results[0].document.content).toContain("alpha");
  });

  it("skips empty queries", async () => {
    const memory = new VectorMemory(new StaticEmbeddingProvider(), new ProjectIndex());
    const results = await memory.search(" ", 3);

    expect(results).toHaveLength(0);
  });
});
