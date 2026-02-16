"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingTemplate = testingTemplate;
function testingTemplate() {
    return [
        "open Alcotest",
        "let () = check int \"sum\" 3 (1 + 2)",
        "open QCheck",
        "let prop = Test.make ~count:100 int (fun n -> n = n)",
        "ignore prop"
    ].join("\n");
}
