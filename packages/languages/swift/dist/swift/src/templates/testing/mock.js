"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTemplate = mockTemplate;
function mockTemplate() {
    return [
        "protocol Repo { func get(id: Int) -> String }",
        "final class MockRepo: Repo {",
        "  var value = \"ok\"",
        "  func get(id: Int) -> String { value }",
        "}",
        "",
        "let repo: Repo = MockRepo()",
        "print(repo.get(id: 1))"
    ].join("\n");
}
