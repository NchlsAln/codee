export function mockTemplate(): string {
  return [
    "using Moq;",
    "",
    "public interface IRepo { string Get(int id); }",
    "var repo = new Mock<IRepo>();",
    "repo.Setup(r => r.Get(It.IsAny<int>())).Returns(\"ok\");",
    "Console.WriteLine(repo.Object.Get(1));"
  ].join("\n");
}
