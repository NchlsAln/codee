"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftUiTemplate = swiftUiTemplate;
function swiftUiTemplate() {
    return [
        "import SwiftUI",
        "",
        "struct ContentView: View {",
        "  var body: some View {",
        "    Text(\"Hello, SwiftUI\")",
        "      .font(.headline)",
        "  }",
        "}"
    ].join("\n");
}
