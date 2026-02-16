"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return "package main\n\nimport (\n  \"fmt\"\n  \"os\"\n)\n\nfunc main() {\n  _ = os.WriteFile(\"data.txt\", []byte(\"hello\"), 0o644)\n  content, _ := os.ReadFile(\"data.txt\")\n  fmt.Println(string(content))\n}\n";
}
