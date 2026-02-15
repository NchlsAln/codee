import { DocumentationGenerator } from "../../src/intelligence/DocumentationGenerator";

describe("DocumentationGenerator", () => {
  it("builds a documentation bundle", () => {
    const generator = new DocumentationGenerator();

    const result = generator.generate({
      projectName: "Codee",
      overview: "Automation for code intelligence.",
      entryPoints: ["apps/codee-vscode", "packages/core-engine"]
    });

    expect(result.readme).toContain("# Codee");
    expect(result.apiDoc).toContain("API Overview");
  });
});
