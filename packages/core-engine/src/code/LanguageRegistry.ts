import { ILanguageSupport } from "./types";

export class LanguageRegistry {
  private readonly languages: ILanguageSupport[] = [
    {
      id: "python",
      name: "Python",
      extensions: [".py"],
      treeSitterGrammar: "tree-sitter-python",
      generationTemplates: {
        systemPrompt: "You are an expert Python assistant. Follow PEP 8 and Pythonic idioms.",
        completionPrompt: "Continue the Python code with clean, idiomatic style.",
        refactorPrompt: "Refactor the Python code to improve clarity and maintain behavior.",
        testPrompt: "Generate pytest unit tests for the given Python code."
      }
    },
    {
      id: "javascript",
      name: "JavaScript",
      extensions: [".js", ".mjs", ".cjs"],
      treeSitterGrammar: "tree-sitter-javascript",
      generationTemplates: {
        systemPrompt: "You are an expert JavaScript assistant. Prefer modern ES2022 syntax.",
        completionPrompt: "Continue the JavaScript code using modern ES syntax and best practices.",
        refactorPrompt: "Refactor the JavaScript code for readability and maintain behavior.",
        testPrompt: "Generate unit tests for the JavaScript code using a common test framework."
      }
    },
    {
      id: "typescript",
      name: "TypeScript",
      extensions: [".ts", ".tsx"],
      treeSitterGrammar: "tree-sitter-typescript",
      generationTemplates: {
        systemPrompt: "You are an expert TypeScript assistant. Use strict typing and modern patterns.",
        completionPrompt: "Continue the TypeScript code with strict types and clear naming.",
        refactorPrompt: "Refactor the TypeScript code for clarity while preserving types.",
        testPrompt: "Generate unit tests for the TypeScript code using a common test framework."
      }
    },
    {
      id: "java",
      name: "Java",
      extensions: [".java"],
      treeSitterGrammar: "tree-sitter-java",
      generationTemplates: {
        systemPrompt: "You are an expert Java assistant. Follow standard Java conventions.",
        completionPrompt: "Continue the Java code with clear OOP structure.",
        refactorPrompt: "Refactor the Java code for readability and maintain behavior.",
        testPrompt: "Generate JUnit tests for the given Java code."
      }
    },
    {
      id: "cpp",
      name: "C++",
      extensions: [".cpp", ".hpp", ".cc", ".h"],
      treeSitterGrammar: "tree-sitter-cpp",
      generationTemplates: {
        systemPrompt: "You are an expert C++ assistant. Prefer modern C++17 patterns.",
        completionPrompt: "Continue the C++ code using modern C++ idioms.",
        refactorPrompt: "Refactor the C++ code for readability and maintain behavior.",
        testPrompt: "Generate unit tests for the C++ code using a common framework."
      }
    },
    {
      id: "go",
      name: "Go",
      extensions: [".go"],
      treeSitterGrammar: "tree-sitter-go",
      generationTemplates: {
        systemPrompt: "You are an expert Go assistant. Keep code idiomatic and concise.",
        completionPrompt: "Continue the Go code in an idiomatic style.",
        refactorPrompt: "Refactor the Go code to improve clarity without changing behavior.",
        testPrompt: "Generate Go tests for the given code using testing package."
      }
    },
    {
      id: "rust",
      name: "Rust",
      extensions: [".rs"],
      treeSitterGrammar: "tree-sitter-rust",
      generationTemplates: {
        systemPrompt: "You are an expert Rust assistant. Emphasize safety and ownership.",
        completionPrompt: "Continue the Rust code with idiomatic patterns.",
        refactorPrompt: "Refactor the Rust code for clarity while preserving lifetimes and safety.",
        testPrompt: "Generate Rust tests using the standard test framework."
      }
    },
    {
      id: "ruby",
      name: "Ruby",
      extensions: [".rb"],
      treeSitterGrammar: "tree-sitter-ruby",
      generationTemplates: {
        systemPrompt: "You are an expert Ruby assistant. Prefer idiomatic Ruby style.",
        completionPrompt: "Continue the Ruby code with clear, idiomatic patterns.",
        refactorPrompt: "Refactor the Ruby code for readability and maintain behavior.",
        testPrompt: "Generate RSpec tests for the given Ruby code."
      }
    },
    {
      id: "php",
      name: "PHP",
      extensions: [".php"],
      treeSitterGrammar: "tree-sitter-php",
      generationTemplates: {
        systemPrompt: "You are an expert PHP assistant. Use modern PHP 8+ conventions.",
        completionPrompt: "Continue the PHP code using modern conventions.",
        refactorPrompt: "Refactor the PHP code for clarity while keeping behavior.",
        testPrompt: "Generate PHPUnit tests for the given PHP code."
      }
    },
    {
      id: "csharp",
      name: "C#",
      extensions: [".cs"],
      treeSitterGrammar: "tree-sitter-c-sharp",
      generationTemplates: {
        systemPrompt: "You are an expert C# assistant. Follow .NET conventions.",
        completionPrompt: "Continue the C# code in an idiomatic style.",
        refactorPrompt: "Refactor the C# code for readability and maintain behavior.",
        testPrompt: "Generate unit tests for the C# code using a common framework."
      }
    }
  ];

  getLanguages(): ILanguageSupport[] {
    return [...this.languages];
  }

  getLanguage(id: string): ILanguageSupport | undefined {
    return this.languages.find((language) => language.id === id);
  }

  detectFromFile(filePath: string): ILanguageSupport | undefined {
    const lower = filePath.toLowerCase();
    return this.languages.find((language) => language.extensions.some((ext) => lower.endsWith(ext)));
  }

  getSystemPrompt(languageId: string): string {
    const language = this.getLanguage(languageId);
    return language?.generationTemplates.systemPrompt ?? "";
  }
}
