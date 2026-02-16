export function mockTemplate(): string {
  return [
    "import io.mockk.every",
    "import io.mockk.mockk",
    "import kotlin.test.Test",
    "",
    "interface Api { fun fetch(): String }",
    "",
    "class MockTest {",
    "  @Test",
    "  fun mocks() {",
    "    val api = mockk<Api>()",
    "    every { api.fetch() } returns \"mock\"",
    "    api.fetch()",
    "  }",
    "}"
  ].join("\n");
}
