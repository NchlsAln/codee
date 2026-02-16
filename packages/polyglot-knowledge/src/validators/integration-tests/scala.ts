import type { IntegrationTestStub } from "./types";

export const scalaIntegrationTests: IntegrationTestStub[] = [
  {
    name: "scala-basic",
    source: "case class User(name: String)\nval user = User(\"Ada\")",
    expected: "Case class mapping preserved."
  }
];
