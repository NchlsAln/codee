import { translateCode } from "../../src";
import { validateSyntax } from "../../src/validators/syntax-validator";

describe("polyglot translation flow", () => {
  it("translates Python list comprehension to Rust iterator chain", () => {
    const source = "squares = [x**2 for x in range(10) if x % 2 == 0]";
    const result = translateCode("python", "rust", source);
    expect(result.output).toContain(".iter()");
    expect(result.output).toContain(".map(");
    expect(result.output).toContain(".collect");
    const syntax = validateSyntax("rust", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Python dataclass to TypeScript interface", () => {
    const source = "@dataclass\nclass User:\n    name: str\n    age: int";
    const result = translateCode("python", "typescript", source);
    expect(result.output).toContain("export interface User");
    expect(result.output).toContain("name: string");
    expect(result.output).toContain("age: number");
    const syntax = validateSyntax("typescript", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Python try/except to Rust Result handling", () => {
    const source = "try:\n    result = risky_operation()\nexcept ValueError as e:\n    print(e)";
    const result = translateCode("python", "rust", source);
    expect(result.output).toContain("Result");
    expect(result.output).toContain("Err");
    const syntax = validateSyntax("rust", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates TypeScript async to Python async/await", () => {
    const source = "export async function fetchData(client) {\n  const data = await client.get();\n  return data;\n}";
    const result = translateCode("typescript", "python", source);
    expect(result.output).toContain("async def fetchData");
    expect(result.output).toContain("await client.get()");
    const syntax = validateSyntax("python", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Python list comprehension to Go range loop", () => {
    const source = "squares = [x * x for x in values if x > 0]";
    const result = translateCode("python", "go", source);
    expect(result.output).toContain("range");
    expect(result.output).toContain("append");
    const syntax = validateSyntax("go", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Go goroutine to Python async", () => {
    const source = "func doWork(client Client) {\n  _ = client\n}\n\nfunc start(client Client) {\n  go doWork(client)\n}\n";
    const result = translateCode("go", "python", source);
    expect(result.output).toContain("async def doWork");
    const syntax = validateSyntax("python", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Python match/case to Rust match", () => {
    const source = "match value:\n    case 0:\n        handle_zero()\n    case _:\n        handle_other()";
    const result = translateCode("python", "rust", source);
    expect(result.output).toContain("match value");
    const syntax = validateSyntax("rust", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates TypeScript generics to Go generics", () => {
    const source = "export function identity<T>(value: T): T {\n  return value;\n}";
    const result = translateCode("typescript", "go", source);
    expect(result.output).toContain("[T any]");
    const syntax = validateSyntax("go", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Rust iterator chain to Python generator", () => {
    const source = "let iter = items.iter().map(|item| item + 1);";
    const result = translateCode("rust", "python", source);
    expect(result.output).toContain("yield");
    const syntax = validateSyntax("python", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Go closures to TypeScript arrows", () => {
    const source = "fn := func(x int) int {\n  return x\n}";
    const result = translateCode("go", "typescript", source);
    expect(result.output).toContain("=>");
    const syntax = validateSyntax("typescript", result.output);
    expect(syntax.ok).toBe(true);
  });

  it("translates Python dataclass to Java and then to C++", () => {
    const source = "@dataclass\nclass User:\n    id: int\n    name: str";
    const javaResult = translateCode("python", "java", source);
    expect(javaResult.output).toMatch(/class|record/);
    const javaSyntax = validateSyntax("java", javaResult.output);
    expect(javaSyntax.ok).toBe(true);

    const cppResult = translateCode("java", "cpp", javaResult.output);
    expect(cppResult.output).toContain("struct");
    const cppSyntax = validateSyntax("cpp", cppResult.output);
    expect(cppSyntax.ok).toBe(true);
  });

  it("translates TypeScript async to Java CompletableFuture and C++ std::async", () => {
    const source = "export async function fetchData(client) {\n  const data = await client.get();\n  return data;\n}";
    const javaResult = translateCode("typescript", "java", source);
    expect(javaResult.output).toContain("CompletableFuture");

    const cppResult = translateCode("java", "cpp", javaResult.output);
    expect(cppResult.output).toContain("std::async");
  });

  it("translates Rust error handling to Java Optional and C++ std::variant", () => {
    const source = "let result: Result<i32, Error> = do_work();\nmatch result {\n  Ok(value) => handle(value),\n  Err(err) => handle_error(err),\n}";
    const javaResult = translateCode("rust", "java", source);
    expect(javaResult.output).toContain("Optional");

    const cppResult = translateCode("java", "cpp", javaResult.output);
    expect(cppResult.output).toContain("std::variant");
  });
});
