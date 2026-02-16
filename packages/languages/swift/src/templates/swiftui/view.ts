export function swiftUiTemplate(): string {
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
