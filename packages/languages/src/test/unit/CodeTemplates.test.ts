import { CodeTemplates } from "@codee/lang-python";

describe("CodeTemplates", () => {
  it("exposes test templates", () => {
    const templates = new CodeTemplates();
    const config = templates.getTemplates();

    expect(config.testTemplates.pytest).toContain("assert True");
  });
});
