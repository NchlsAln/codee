import { LanguageId } from "../../types";

export function singletonTemplate(language: LanguageId): string {
  switch (language) {
    case "python":
      return "class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n";
    case "typescript":
      return "class Singleton {\n  private static instance: Singleton;\n  private constructor() {}\n  static getInstance(): Singleton {\n    if (!Singleton.instance) Singleton.instance = new Singleton();\n    return Singleton.instance;\n  }\n}\n";
    case "rust":
      return "// TODO: Singleton pattern in Rust\n";
    case "go":
      return "import \"sync\"\n\ntype Singleton struct{}\n\nvar instance *Singleton\nvar once sync.Once\n\nfunc GetInstance() *Singleton {\n  once.Do(func() {\n    instance = &Singleton{}\n  })\n  return instance\n}\n";
    default:
      return "// TODO: Implement template";
  }
}
