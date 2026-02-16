"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinePipelineTemplate = combinePipelineTemplate;
function combinePipelineTemplate() {
    return [
        "import Combine",
        "",
        "let subject = PassthroughSubject<Int, Never>()",
        "let cancellable = subject",
        "  .map { $0 * 2 }",
        "  .sink { value in print(value) }",
        "",
        "subject.send(3)",
        "cancellable.cancel()"
    ].join("\n");
}
