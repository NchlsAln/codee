import type { IntegrationTestStub } from "./types";

export const csharpIntegrationTests: IntegrationTestStub[] = [
  {
    name: "csharp-basic",
    source: "public record User(string Name);\nvar user = new User(\"Ada\");",
    expected: "Record and constructor mapping preserved."
  }
];
