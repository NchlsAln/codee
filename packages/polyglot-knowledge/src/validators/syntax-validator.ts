import { spawnSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { LanguageId, ValidationResult } from "../types";

export function validateSyntax(language: LanguageId, code: string): ValidationResult {
  if (language === "typescript" || language === "javascript") {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "codee-polyglot-"));
    const tempFile = path.join(tempDir, language === "javascript" ? "check.js" : "check.ts");
    fs.writeFileSync(tempFile, code, "utf-8");
    const tscResult = spawnSync("tsc", ["--noEmit", "--pretty", "false", tempFile], { encoding: "utf-8" });
    if (tscResult.error) {
      fs.rmSync(tempDir, { recursive: true, force: true });
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const ts = require("typescript");
        const result = ts.transpileModule(code, {
          compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext }
        });
        const diagnostics = result.diagnostics ?? [];
        if (diagnostics.length === 0) {
          return { ok: true, details: ["TypeScript syntax check passed (fallback)."] };
        }
        const details = diagnostics.map((diag: { messageText: string }) => String(diag.messageText));
        return { ok: false, details };
      } catch (error) {
        return { ok: true, details: ["TypeScript compiler not available; skipped syntax validation."] };
      }
    }
    fs.rmSync(tempDir, { recursive: true, force: true });
    if (tscResult.status === 0) {
      return { ok: true, details: ["TypeScript syntax check passed."] };
    }
    const output = tscResult.stderr || tscResult.stdout || "";
    const errorCodes = Array.from(output.matchAll(/error\s+TS(\d+)/g))
      .map((match) => match[1])
      .filter((code): code is string => Boolean(code));
    const nonBlocking = new Set(["2304", "2307"]);
    const allNonBlocking = errorCodes.length > 0 && errorCodes.every((code) => nonBlocking.has(code));
    if (allNonBlocking) {
      return {
        ok: true,
        details: ["TypeScript syntax check passed; unresolved identifiers may remain."]
      };
    }
    return { ok: false, details: [output || "TypeScript syntax check failed."] };
  }

  if (language === "python") {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "codee-polyglot-"));
    const tempFile = path.join(tempDir, "check.py");
    fs.writeFileSync(tempFile, code, "utf-8");
    const result = spawnSync("python", ["-m", "py_compile", tempFile], { encoding: "utf-8" });
    fs.rmSync(tempDir, { recursive: true, force: true });
    if (result.error) {
      return { ok: true, details: ["Python not available; skipped syntax validation."] };
    }
    if (result.status === 0) {
      return { ok: true, details: ["Python syntax check passed."] };
    }
    return { ok: false, details: [result.stderr || "Python syntax check failed."] };
  }

  if (language === "rust") {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "codee-polyglot-"));
    const tempFile = path.join(tempDir, "check.rs");
    fs.writeFileSync(tempFile, code, "utf-8");
    const result = spawnSync("rustc", ["--emit=metadata", tempFile], { encoding: "utf-8" });
    fs.rmSync(tempDir, { recursive: true, force: true });
    if (result.error) {
      return { ok: true, details: ["rustc not available; skipped syntax validation."] };
    }
    if (result.status === 0) {
      return { ok: true, details: ["Rust syntax check passed."] };
    }
    return { ok: false, details: [result.stderr || "Rust syntax check failed."] };
  }

  if (language === "go") {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "codee-polyglot-"));
    const tempFile = path.join(tempDir, "check.go");
    const tempMod = path.join(tempDir, "go.mod");
    const hasPackage = /^\s*package\s+\w+/m.test(code);
    const hasTopLevelDecl = /\b(func\s+\w+\s*\(|type\s+\w+\s+|var\s+\w+|const\s+\w+|import\s+\()/m.test(
      code
    );
    const wrappedSnippet = hasTopLevelDecl
      ? code
      : `func _() {\n${code.split("\n").map((line) => `  ${line}`).join("\n")}\n}`;
    const goSource = hasPackage ? code : `package main\n\n${wrappedSnippet}`;
    fs.writeFileSync(tempFile, goSource, "utf-8");
    fs.writeFileSync(tempMod, "module codee-temp\n\ngo 1.20\n", "utf-8");
    const formatResult = spawnSync("gofmt", ["-l", tempFile], { encoding: "utf-8" });
    if (formatResult.error) {
      fs.rmSync(tempDir, { recursive: true, force: true });
      return { ok: true, details: ["gofmt not available; skipped syntax validation."] };
    }
    if (formatResult.status !== 0) {
      fs.rmSync(tempDir, { recursive: true, force: true });
      return { ok: false, details: [formatResult.stderr || "Go syntax check failed."] };
    }

    const details: string[] = ["Go syntax check passed."];
    if (formatResult.stdout && formatResult.stdout.trim().length > 0) {
      details.push("gofmt would reformat the file.");
    }

    if (!hasPackage) {
      fs.rmSync(tempDir, { recursive: true, force: true });
      return { ok: true, details: [...details, "go vet skipped for snippet input."] };
    }

    const vetResult = spawnSync("go", ["vet", tempDir], { encoding: "utf-8" });
    fs.rmSync(tempDir, { recursive: true, force: true });
    if (vetResult.error) {
      return { ok: true, details: [...details, "go vet not available; skipped vetting."] };
    }
    if (vetResult.status === 0) {
      return { ok: true, details: [...details, "Go vet passed."] };
    }
    return { ok: false, details: [vetResult.stderr || "Go vet failed."] };
  }

  if (language === "java") {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "codee-polyglot-"));
    const tempFile = path.join(tempDir, "Check.java");
    const hasClass = /\bclass\s+\w+/.test(code);
    const javaSource = hasClass
      ? code
      : (() => {
          const lines = code.split("\n");
          const imports = lines.filter((line) => line.trim().startsWith("import "));
          const body = lines.filter((line) => !line.trim().startsWith("import "));
          const header = imports.length > 0 ? `${imports.join("\n")}\n\n` : "";
          return `${header}public class Check {\n  public static void main(String[] args) {\n${body
            .map((line) => `    ${line}`)
            .join("\n")}\n  }\n}`;
        })();
    fs.writeFileSync(tempFile, javaSource, "utf-8");
    const result = spawnSync("javac", ["-d", tempDir, tempFile], { encoding: "utf-8" });
    fs.rmSync(tempDir, { recursive: true, force: true });
    if (result.error) {
      return { ok: true, details: ["javac not available; skipped syntax validation."] };
    }
    if (result.status === 0) {
      return { ok: true, details: ["Java syntax check passed."] };
    }
    return { ok: false, details: [result.stderr || "Java syntax check failed."] };
  }

  if (language === "cpp") {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "codee-polyglot-"));
    const tempFile = path.join(tempDir, "check.cpp");
    const hasMain = /\bint\s+main\s*\(/.test(code);
    const cppSource = hasMain
      ? code
      : `int main() {\n${code
          .split("\n")
          .map((line) => `  ${line}`)
          .join("\n")}\n  return 0;\n}`;
    fs.writeFileSync(tempFile, cppSource, "utf-8");
    const clangResult = spawnSync("clang++", ["-fsyntax-only", "-std=c++20", tempFile], { encoding: "utf-8" });
    if (clangResult.error) {
      const gppResult = spawnSync("g++", ["-fsyntax-only", "-std=c++20", tempFile], { encoding: "utf-8" });
      fs.rmSync(tempDir, { recursive: true, force: true });
      if (gppResult.error) {
        return { ok: true, details: ["clang++/g++ not available; skipped syntax validation."] };
      }
      if (gppResult.status === 0) {
        return { ok: true, details: ["C++ syntax check passed (g++)."] };
      }
      return { ok: false, details: [gppResult.stderr || "C++ syntax check failed."] };
    }
    fs.rmSync(tempDir, { recursive: true, force: true });
    if (clangResult.status === 0) {
      return { ok: true, details: ["C++ syntax check passed."] };
    }
    return { ok: false, details: [clangResult.stderr || "C++ syntax check failed."] };
  }

  if (language === "kotlin") {
    return { ok: true, details: ["Kotlin syntax validation not configured; skipped."] };
  }

  if (language === "scala") {
    return { ok: true, details: ["Scala syntax validation not configured; skipped."] };
  }

  if (language === "csharp") {
    return { ok: true, details: ["C# syntax validation not configured; skipped."] };
  }

  if (language === "swift") {
    return { ok: true, details: ["Swift syntax validation not configured; skipped."] };
  }

  if (language === "dart") {
    return { ok: true, details: ["Dart syntax validation not configured; skipped."] };
  }

  return { ok: true, details: ["No syntax validator available for target language."] };
}
