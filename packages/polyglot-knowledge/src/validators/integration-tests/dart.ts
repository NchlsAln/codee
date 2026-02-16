import type { IntegrationTestStub } from "./types";

export const dartIntegrationTests: IntegrationTestStub[] = [
  {
    name: "dart-basic",
    source: "class User { User(this.name); final String name; }\nfinal user = User('Ada');",
    expected: "Class constructor mapping preserved."
  }
];
