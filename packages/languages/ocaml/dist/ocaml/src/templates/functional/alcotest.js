"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alcotestTemplate = alcotestTemplate;
function alcotestTemplate() {
    return [
        "let test_add () =",
        "  Alcotest.(check int) \"sum\" 4 (2 + 2)",
        "let () = Alcotest.run \"suite\" [ (\"math\", [ Alcotest.test_case \"add\" `Quick test_add ]) ]"
    ].join("\n");
}
