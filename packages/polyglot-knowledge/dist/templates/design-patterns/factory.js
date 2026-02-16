"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryTemplate = factoryTemplate;
function factoryTemplate(language) {
    switch (language) {
        case "python":
            return "def build(kind):\n    if kind == \"a\":\n        return A()\n    if kind == \"b\":\n        return B()\n    raise ValueError(kind)\n";
        case "typescript":
            return "type Kind = \"a\" | \"b\";\nexport function build(kind: Kind) {\n  if (kind === \"a\") return new A();\n  if (kind === \"b\") return new B();\n  throw new Error(kind);\n}\n";
        case "rust":
            return "// TODO: Factory pattern in Rust\n";
        case "go":
            return "import \"fmt\"\n\nfunc build(kind string) (any, error) {\n  switch kind {\n  case \"a\":\n    return &A{}, nil\n  case \"b\":\n    return &B{}, nil\n  default:\n    return nil, fmt.Errorf(\"unknown kind: %s\", kind)\n  }\n}\n";
        default:
            return "// TODO: Implement template";
    }
}
