"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTemplate = mockTemplate;
function mockTemplate() {
    return [
        "using Moq;",
        "",
        "public interface IRepo { string Get(int id); }",
        "var repo = new Mock<IRepo>();",
        "repo.Setup(r => r.Get(It.IsAny<int>())).Returns(\"ok\");",
        "Console.WriteLine(repo.Object.Get(1));"
    ].join("\n");
}
