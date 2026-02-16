import { LanguageId } from "../../types";

export function strategyTemplate(language: LanguageId): string {
  switch (language) {
    case "python":
      return "def execute(strategy, data):\n    return strategy(data)\n";
    case "typescript":
      return "type Strategy<T, R> = (data: T) => R;\nexport function execute<T, R>(strategy: Strategy<T, R>, data: T): R {\n  return strategy(data);\n}\n";
    case "rust":
      return "// TODO: Strategy pattern in Rust\n";
    case "go":
      return "type Strategy func(data string) string\n\nfunc Execute(strategy Strategy, data string) string {\n  return strategy(data)\n}\n";
    default:
      return "// TODO: Implement template";
  }
}
