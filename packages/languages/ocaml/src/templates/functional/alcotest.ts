export function alcotestTemplate(): string {
  return [
    "let test_add () =",
    "  Alcotest.(check int) \"sum\" 4 (2 + 2)",
    "let () = Alcotest.run \"suite\" [ (\"math\", [ Alcotest.test_case \"add\" `Quick test_add ]) ]"
  ].join("\n");
}
