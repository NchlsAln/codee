import type { IntegrationTestStub } from "./types";

export const kotlinIntegrationTests: IntegrationTestStub[] = [
  {
    name: "kotlin-basic",
    source: "data class User(val name: String)\nval user = User(\"Ada\")",
    expected: "Data class mapping and constructor usage preserved."
  }
];
