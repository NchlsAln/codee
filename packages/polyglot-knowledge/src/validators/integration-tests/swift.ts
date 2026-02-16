import type { IntegrationTestStub } from "./types";

export const swiftIntegrationTests: IntegrationTestStub[] = [
  {
    name: "swift-basic",
    source: "struct User { let name: String }\nlet user = User(name: \"Ada\")",
    expected: "Struct mapping preserved."
  }
];
