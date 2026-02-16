export function mockTemplate(): string {
  return [
    "use mockall::predicate::*;",
    "use mockall::*;",
    "",
    "#[automock]",
    "trait Api {",
    "    fn fetch(&self) -> String;",
    "}",
    "",
    "let mut mock = MockApi::new();",
    "mock.expect_fetch().returning(|| \"mock\".to_string());",
    "",
    "assert_eq!(mock.fetch(), \"mock\");"
  ].join("\n");
}
