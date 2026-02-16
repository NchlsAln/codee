"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliTemplate = cliTemplate;
function cliTemplate() {
    return "package main\n\nimport (\n  \"flag\"\n  \"fmt\"\n)\n\nfunc main() {\n  name := flag.String(\"name\", \"world\", \"name to greet\")\n  flag.Parse()\n  fmt.Printf(\"Hello, %s!\\n\", *name)\n}\n";
}
