export function testingTemplate(): string {
  return [
    "open Alcotest",
    "let () = check int \"sum\" 3 (1 + 2)",
    "open QCheck",
    "let prop = Test.make ~count:100 int (fun n -> n = n)",
    "ignore prop"
  ].join("\n");
}
