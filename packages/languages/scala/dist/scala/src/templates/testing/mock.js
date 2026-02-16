"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTemplate = mockTemplate;
function mockTemplate() {
    return [
        "import org.mockito.Mockito._",
        "import org.mockito.ArgumentMatchers._",
        "",
        "trait Repo { def get(id: Long): String }",
        "val repo = mock(classOf[Repo])",
        "when(repo.get(anyLong())).thenReturn(\"ok\")",
        "assert(repo.get(1L) == \"ok\")"
    ].join("\n");
}
