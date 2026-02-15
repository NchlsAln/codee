import { SmartCompression } from "../../memory/SmartCompression";

describe("SmartCompression", () => {
  it("selects sections by priority within budget", () => {
    const compressor = new SmartCompression();
    const sections = [
      { id: "low", title: "Low", content: "l".repeat(40), priority: 1 },
      { id: "high", title: "High", content: "h".repeat(40), priority: 10 },
      { id: "mid", title: "Mid", content: "m".repeat(40), priority: 5 }
    ];

    const result = compressor.compress(sections, 20);
    const ids = result.map((section) => section.id);

    expect(ids).toContain("high");
    expect(ids).toContain("mid");
    expect(ids).not.toContain("low");
  });

  it("truncates oversized sections and preserves signatures", () => {
    const compressor = new SmartCompression();
    const content = [
      "export class Alpha {}",
      "function beta() {}",
      "",
      "x".repeat(1200),
      "tail"
    ].join("\n");

    const [section] = compressor.compress(
      [{ id: "large", title: "Large", content, priority: 10 }],
      40
    );

    expect(section.content).toContain("class Alpha");
    expect(section.content).toContain("function beta");
    expect(section.content).toContain("...");
    expect(section.content).toContain("tail");
  });
});
