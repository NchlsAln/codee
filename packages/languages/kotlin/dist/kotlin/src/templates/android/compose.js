"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeTemplate = composeTemplate;
function composeTemplate() {
    return [
        "import androidx.compose.material3.Text",
        "import androidx.compose.runtime.Composable",
        "",
        "@Composable",
        "fun Greeting(name: String) {",
        "  Text(text = \"Hello, ${'$'}name!\")",
        "}"
    ].join("\n");
}
