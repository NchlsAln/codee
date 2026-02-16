import { LanguageId } from "../../types";

export function observerTemplate(language: LanguageId): string {
  switch (language) {
    case "python":
      return "class Subject:\n    def __init__(self):\n        self._subs = []\n    def subscribe(self, fn):\n        self._subs.append(fn)\n    def notify(self, data):\n        for fn in self._subs:\n            fn(data)\n";
    case "typescript":
      return "class Subject<T> {\n  private subs: Array<(data: T) => void> = [];\n  subscribe(fn: (data: T) => void) {\n    this.subs.push(fn);\n  }\n  notify(data: T) {\n    this.subs.forEach((fn) => fn(data));\n  }\n}\n";
    case "rust":
      return "// TODO: Observer pattern in Rust\n";
    case "go":
      return "type Subject struct {\n  subs []func(data string)\n}\n\nfunc (s *Subject) Subscribe(fn func(data string)) {\n  s.subs = append(s.subs, fn)\n}\n\nfunc (s *Subject) Notify(data string) {\n  for _, fn := range s.subs {\n    fn(data)\n  }\n}\n";
    default:
      return "// TODO: Implement template";
  }
}
