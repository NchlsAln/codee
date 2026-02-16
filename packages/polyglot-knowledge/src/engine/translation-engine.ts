import { detectPatterns } from "../analysis/pattern-detector";
import {
  LanguageId,
  PatternMatch,
  TranslationDecision,
  TranslationOptions,
  TranslationResult
} from "../types";

const patternPriority: Record<string, number> = {
  "list-comprehension": 5,
  decorator: 4,
  "async-await": 6,
  dataclass: 7,
  "error-handling": 5,
  "dict-literal": 3,
  "none-handling": 2,
  generics: 3,
  iterators: 3,
  closures: 2,
  "pattern-matching": 4,
  "concurrency-patterns": 5
};

export function translateWithEngine(
  from: LanguageId,
  to: LanguageId,
  code: string,
  options: TranslationOptions = {}
): TranslationResult {
  const lineCount = code.split(/\r?\n/).length;
  if (lineCount > 100) {
    const output = addManualReviewComment(to, `Translation skipped: ${lineCount} lines exceed 100 line limit.`, code);
    return {
      output,
      concepts: [],
      notes: ["Translation skipped for large input."],
      warnings: ["Input exceeds 100 lines. Split the translation into smaller blocks."],
      patterns: [],
      confidence: 0
    };
  }

  const patterns = detectPatterns(code, from);
  const match = selectBestPattern(patterns);
  if (!match) {
    return {
      output: addManualReviewComment(to, "No supported patterns detected.", fallbackTranslation(from, to, code)),
      concepts: extractConceptsFromPatterns([]),
      notes: ["No supported patterns detected."],
      warnings: ["No supported patterns detected."],
      patterns,
      confidence: 0
    };
  }

  const decisions = buildDecisions(match, from, to, code);
  const decisionSelections = resolveDecisions(decisions, options);
  const output = generateTranslation(match, from, to, code, decisionSelections);
  const notes = [
    `Matched ${match.id} pattern (${Math.round(match.confidence * 100)}% confidence).`,
    ...((match.notes ?? []).length ? match.notes ?? [] : [])
  ];
  const steps = options.showSteps
    ? [
        `Detected pattern: ${match.id}`,
        `Target language: ${to}`,
        `Decisions: ${decisions.map((decision) => `${decision.id}=${decisionSelections[decision.id] ?? decision.defaultOption}`).join(", ") || "none"}`
      ]
    : undefined;

  if (match.confidence < 0.5) {
    return {
      output: addManualReviewComment(to, "Low confidence translation rejected.", output),
      concepts: extractConceptsFromPatterns(patterns),
      notes,
      warnings: ["Confidence below 0.5; translation requires manual review."],
      patterns,
      decisions,
      steps,
      confidence: match.confidence
    };
  }

  if (match.confidence < 0.7) {
    return {
      output: addManualReviewComment(to, "Low confidence translation; manual review needed.", output),
      concepts: extractConceptsFromPatterns(patterns),
      notes,
      warnings: ["Confidence below 0.7; review recommended."],
      patterns,
      decisions,
      steps,
      confidence: match.confidence
    };
  }

  return {
    output,
    concepts: extractConceptsFromPatterns(patterns),
    notes,
    patterns,
    decisions,
    steps,
    confidence: match.confidence
  };
}

function selectBestPattern(patterns: PatternMatch[]): PatternMatch | undefined {
  if (patterns.length === 0) {
    return undefined;
  }
  return [...patterns].sort((a, b) => {
    const confidence = b.confidence - a.confidence;
    if (confidence !== 0) {
      return confidence;
    }
    return (patternPriority[b.id] ?? 0) - (patternPriority[a.id] ?? 0);
  })[0];
}

function generateTranslation(
  match: PatternMatch,
  from: LanguageId,
  to: LanguageId,
  code: string,
  decisions: Record<string, string>
): string {
  if (match.id === "list-comprehension") {
    return translateListComprehension(match, from, to, code);
  }
  if (match.id === "decorator") {
    return translateDecorator(match, from, to, code);
  }
  if (match.id === "async-await") {
    return translateAsyncAwait(match, from, to, code);
  }
  if (match.id === "dataclass") {
    return translateDataclass(match, from, to, code, decisions);
  }
  if (match.id === "error-handling") {
    return translateErrorHandling(match, from, to, code);
  }
  if (match.id === "dict-literal") {
    return translateDictLiteral(match, from, to, code, decisions);
  }
  if (match.id === "none-handling") {
    return translateNoneHandling(match, from, to, code);
  }
  if (match.id === "generics") {
    return translateGenerics(to);
  }
  if (match.id === "iterators") {
    return translateIterators(to);
  }
  if (match.id === "closures") {
    return translateClosures(to);
  }
  if (match.id === "pattern-matching") {
    return translatePatternMatching(to);
  }
  if (match.id === "concurrency-patterns") {
    return translateConcurrencyPatterns(to);
  }
  return fallbackTranslation(from, to, code);
}

function translateListComprehension(match: PatternMatch, from: LanguageId, to: LanguageId, code: string): string {
  if (from === "python" && to === "typescript") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    const mapExpr = `${source}.map((${item}) => ${transform})`;
    if (filter) {
      return `${source}.filter((${item}) => ${filter}).map((${item}) => ${transform});`;
    }
    return `${mapExpr};`;
  }
  if (from === "python" && to === "rust") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    const filterPart = filter ? `.filter(|${item}| ${filter})` : "";
    return [
      `let result: Vec<_> = ${source}.iter()${filterPart}.map(|${item}| ${transform}).collect();`,
      "// result now holds the transformed values"
    ].join("\n");
  }
  if (from === "typescript" && to === "python") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseArrowFunction(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseArrowFunction(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    const predicate = filter?.body ? ` if ${filter.body}` : "";
    return `[${transform} for ${param} in ${source}${predicate}]`;
  }
  if (from === "typescript" && to === "rust") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseArrowFunction(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseArrowFunction(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const filterPart = filter?.body ? `.filter(|${param}| ${filter.body})` : "";
    return `let result: Vec<_> = ${source}.iter()${filterPart}.map(|${param}| ${map.body}).collect();`;
  }
  if (from === "rust" && to === "python") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseRustClosure(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseRustClosure(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    const predicate = filter?.body ? ` if ${filter.body}` : "";
    return `[${transform} for ${param} in ${source}${predicate}]`;
  }
  if (from === "rust" && to === "typescript") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseRustClosure(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseRustClosure(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const filterPart = filter?.body ? `.filter((${param}) => ${filter.body})` : "";
    return `${source}${filterPart}.map((${param}) => ${map.body});`;
  }
  if (from === "python" && to === "go") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    return buildGoListLoop(source, item, transform, filter);
  }
  if (from === "typescript" && to === "go") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseArrowFunction(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseArrowFunction(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    return buildGoListLoop(source, param, transform, filter?.body ?? "");
  }
  if (from === "rust" && to === "go") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseRustClosure(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseRustClosure(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    return buildGoListLoop(source, param, transform, filter?.body ?? "");
  }
  if (from === "go" && to === "python") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    const predicate = filter ? ` if ${filter}` : "";
    return `[${transform} for ${item} in ${source}${predicate}]`;
  }
  if (from === "go" && to === "typescript") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    const filterPart = filter ? `.filter((${item}) => ${filter})` : "";
    return `${source}${filterPart}.map((${item}) => ${transform});`;
  }
  if (from === "go" && to === "rust") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    const filterPart = filter ? `.filter(|${item}| ${filter})` : "";
    return `let result: Vec<_> = ${source}.iter()${filterPart}.map(|${item}| ${transform}).collect();`;
  }
  if (from === "python" && to === "java") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    return buildJavaListPipeline(source, item, transform, filter);
  }
  if (from === "typescript" && to === "java") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseArrowFunction(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseArrowFunction(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    return buildJavaListPipeline(source, param, transform, filter?.body ?? "");
  }
  if (from === "rust" && to === "java") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseRustClosure(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseRustClosure(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    return buildJavaListPipeline(source, param, transform, filter?.body ?? "");
  }
  if (from === "go" && to === "java") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    return buildJavaListPipeline(source, item, transform, filter);
  }
  if (from === "python" && to === "cpp") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    return buildCppListLoop(source, item, transform, filter);
  }
  if (from === "typescript" && to === "cpp") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseArrowFunction(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseArrowFunction(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    return buildCppListLoop(source, param, transform, filter?.body ?? "");
  }
  if (from === "rust" && to === "cpp") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseRustClosure(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseRustClosure(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const transform = map.body || param;
    return buildCppListLoop(source, param, transform, filter?.body ?? "");
  }
  if (from === "go" && to === "cpp") {
    const source = match.parameters.source ?? "items";
    const item = match.parameters.item ?? "item";
    const transform = match.parameters.transform ?? item;
    const filter = match.parameters.filter ?? "";
    return buildCppListLoop(source, item, transform, filter);
  }
  if (from === "java" && to === "python") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item -> item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseJavaLambda(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseJavaLambda(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const predicate = filter?.body ? ` if ${filter.body}` : "";
    return `[${map.body} for ${param} in ${source}${predicate}]`;
  }
  if (from === "java" && to === "rust") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item -> item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseJavaLambda(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseJavaLambda(filterFn) : null;
    const param = map.param || filter?.param || "item";
    const filterPart = filter?.body ? `.filter(|${param}| ${filter.body})` : "";
    return `let result: Vec<_> = ${source}.iter()${filterPart}.map(|${param}| ${map.body}).collect();`;
  }
  if (from === "java" && to === "go") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "item -> item";
    const filterFn = match.parameters.filterFn ?? "";
    const map = parseJavaLambda(mapFn) ?? { param: "item", body: "item" };
    const filter = filterFn ? parseJavaLambda(filterFn) : null;
    const param = map.param || filter?.param || "item";
    return buildGoListLoop(source, param, map.body, filter?.body ?? "");
  }
  if (from === "cpp" && to === "python") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "[](auto item) { return item; }";
    const map = parseCppLambda(mapFn) ?? { param: "item", body: "item" };
    return `[${map.body} for ${map.param} in ${source}]`;
  }
  if (from === "cpp" && to === "typescript") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "[](auto item) { return item; }";
    const map = parseCppLambda(mapFn) ?? { param: "item", body: "item" };
    return `${source}.map((${map.param}) => ${map.body});`;
  }
  if (from === "cpp" && to === "rust") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "[](auto item) { return item; }";
    const map = parseCppLambda(mapFn) ?? { param: "item", body: "item" };
    return `let result: Vec<_> = ${source}.iter().map(|${map.param}| ${map.body}).collect();`;
  }
  if (from === "cpp" && to === "go") {
    const source = match.parameters.source ?? "items";
    const mapFn = match.parameters.mapFn ?? "[](auto item) { return item; }";
    const map = parseCppLambda(mapFn) ?? { param: "item", body: "item" };
    return buildGoListLoop(source, map.param, map.body, "");
  }

  return fallbackTranslation(from, to, code);
}

function buildGoListLoop(source: string, item: string, transform: string, filter: string): string {
  const lines = ["result := make([]any, 0)", `for _, ${item} := range ${source} {`];
  if (filter) {
    lines.push(`  if ${filter} {`);
    lines.push(`    result = append(result, ${transform})`);
    lines.push("  }");
  } else {
    lines.push(`  result = append(result, ${transform})`);
  }
  lines.push("}");
  return lines.join("\n");
}

function buildJavaListPipeline(source: string, item: string, transform: string, filter: string): string {
  const filterPart = filter ? `.filter(${item} -> ${filter})` : "";
  return [
    "import java.util.List;",
    `List<Object> ${source} = List.of();`,
    `List<Object> result = ${source}.stream()${filterPart}.map(${item} -> ${transform}).toList();`
  ].join("\n");
}

function buildCppListLoop(source: string, item: string, transform: string, filter: string): string {
  const lines = [
    "#include <vector>",
    `std::vector<int> ${source};`,
    `std::vector<decltype(${transform})> result;`,
    `for (const auto& ${item} : ${source}) {`
  ];
  if (filter) {
    lines.push(`  if (${filter}) {`);
    lines.push(`    result.push_back(${transform});`);
    lines.push("  }");
  } else {
    lines.push(`  result.push_back(${transform});`);
  }
  lines.push("}");
  return lines.join("\n");
}

function translateDecorator(match: PatternMatch, from: LanguageId, to: LanguageId, code: string): string {
  const decorator = match.parameters.decorator ?? "decorator";
  const name = match.parameters.name ?? "Thing";
  const target = match.parameters.target ?? "def";
  const signature = extractSignature(from, name, code);
  const isClass = target === "class";

  if (to === "typescript") {
    const header = `@${decorator}`;
    const declaration = isClass
      ? `class ${name} {\n  // ...\n}`
      : `function ${name}(${signature}) {\n  // ...\n}`;
    return `${header}\n${declaration}`;
  }

  if (to === "rust") {
    const header = `#[${decorator}]`;
    const declaration = isClass
      ? `struct ${name} {\n  // ...\n}`
      : `fn ${name}(${signature}) {\n  // ...\n}`;
    return `${header}\n${declaration}`;
  }

  if (to === "python") {
    const header = `@${decorator}`;
    const declaration = isClass
      ? `class ${name}:\n    pass`
      : `def ${name}(${signature}):\n    pass`;
    return `${header}\n${declaration}`;
  }

  if (to === "go") {
    const header = `// TODO: Go has no decorators. Consider wrapping ${name} with ${decorator}.`;
    const declaration = isClass
      ? `type ${name} struct {\n  // ...\n}`
      : `func ${name}(${signature}) {\n  // ...\n}`;
    return `${header}\n${declaration}`;
  }

  if (to === "java") {
    const header = `@${decorator}`;
    const declaration = isClass
      ? `public class ${name} {\n  // ...\n}`
      : `public void ${name}(${signature}) {\n  // ...\n}`;
    return `${header}\n${declaration}`;
  }

  if (to === "cpp") {
    const header = `// TODO: C++ attributes may map to ${decorator}.`;
    const declaration = isClass
      ? `class ${name} {\n  // ...\n};`
      : `void ${name}(${signature}) {\n  // ...\n}`;
    return `${header}\n${declaration}`;
  }

  return fallbackTranslation(from, to, code);
}

function translateAsyncAwait(match: PatternMatch, from: LanguageId, to: LanguageId, code: string): string {
  const name = match.parameters.name ?? "task";
  const signature = extractSignature(from, name, code);
  const awaitExpr = extractAwaitExpression(from, code);

  if (to === "typescript") {
    const awaitLine = awaitExpr
      ? `  const result = await ${awaitExpr};`
      : "  const result = await Promise.resolve();";
    return `export async function ${name}(${signature}) {\n${awaitLine}\n  return result;\n}`;
  }

  if (to === "python") {
    const awaitLine = awaitExpr ? `    result = await ${awaitExpr}` : "    result = None";
    const pythonSignature = from === "go" ? stripGoSignature(signature) : signature;
    return `async def ${name}(${pythonSignature}):\n${awaitLine}\n    return result`;
  }

  if (to === "rust") {
    const awaitLine = awaitExpr ? `    let result = ${awaitExpr}.await;` : "    // await async work";
    return [
      "async fn " + name + "(" + signature + ") -> Result<(), Box<dyn std::error::Error>> {",
      awaitLine,
      "    Ok(())",
      "}"
    ].join("\n");
  }

  if (to === "go") {
    const awaitLine = awaitExpr ? `  result := ${awaitExpr}` : "  var result any";
    return [
      `func ${name}(${signature}) {`,
      "  // TODO: Convert async/await to goroutines or blocking calls.",
      awaitLine,
      "  _ = result",
      "}"
    ].join("\n");
  }

  if (to === "java") {
    const line = awaitExpr ? `    return ${awaitExpr};` : "    return null;";
    return [
      "import java.util.concurrent.CompletableFuture;",
      "",
      `public CompletableFuture<Object> ${name}(${signature}) {`,
      "  return CompletableFuture.supplyAsync(() -> {",
      line,
      "  });",
      "}"
    ].join("\n");
  }

  if (to === "cpp") {
    const line = awaitExpr ? `  return ${awaitExpr};` : "  return {};";
    return [
      "#include <future>",
      "",
      `std::future<int> ${name}(${signature}) {`,
      "  return std::async(std::launch::async, [] {",
      line,
      "  });",
      "}"
    ].join("\n");
  }

  return fallbackTranslation(from, to, code);
}

function translateDataclass(
  match: PatternMatch,
  from: LanguageId,
  to: LanguageId,
  code: string,
  decisions: Record<string, string>
): string {
  const name = match.parameters.name ?? "Model";
  const body = match.parameters.body ?? "";

  if (from === "python" && to === "typescript") {
    const fields = parsePythonFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapPythonTypeToTypeScript(field.type)};`);
    return `export interface ${name} {\n${lines.join("\n")}\n}`;
  }
  if (from === "python" && to === "rust") {
    const fields = parsePythonFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapPythonTypeToRust(field.type, field.defaultValue)},`);
    return ["#[derive(Debug, Clone)]", `struct ${name} {`, lines.join("\n"), "}"]
      .filter(Boolean)
      .join("\n");
  }
  if (from === "python" && to === "go") {
    const fields = parsePythonFields(body);
    const lines = fields.map((field) => `  ${formatGoFieldName(field.name)} ${mapPythonTypeToGo(field.type)}`);
    return [`type ${name} struct {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }
  if (from === "python" && to === "java") {
    const fields = parsePythonFields(body);
    const lines = fields.map((field) => `  private ${mapPythonTypeToJava(field.type)} ${field.name};`);
    const accessors = fields
      .map((field) => {
        const type = mapPythonTypeToJava(field.type);
        const prop = field.name.charAt(0).toUpperCase() + field.name.slice(1);
        return `  public ${type} get${prop}() { return ${field.name}; }\n  public void set${prop}(${type} ${field.name}) { this.${field.name} = ${field.name}; }`;
      })
      .join("\n");
    return [`public class ${name} {`, lines.join("\n") || "  // ...", "", accessors, "}"].join("\n");
  }
  if (from === "python" && to === "cpp") {
    const fields = parsePythonFields(body);
    const lines = fields.map((field) => `  ${mapPythonTypeToCpp(field.type)} ${field.name};`);
    return [`struct ${name} {`, lines.join("\n") || "  // ...", "};"].join("\n");
  }
  if (from === "typescript" && to === "python") {
    const fields = parseTypeScriptFields(body);
    const lines = fields.map((field) => `    ${field.name}: ${mapTypeScriptTypeToPython(field.type)}`);
    return ["@dataclass", `class ${name}:`, lines.join("\n") || "    pass"].join("\n");
  }
  if (from === "typescript" && to === "rust") {
    const fields = parseTypeScriptFields(body);
    const lines = fields.map((field) =>
      `  ${field.name}: ${mapTypeScriptTypeToRust(field.type, decisions.anyStrategy)},`
    );
    return ["#[derive(Debug, Clone)]", `struct ${name} {`, lines.join("\n"), "}"]
      .filter(Boolean)
      .join("\n");
  }
  if (from === "typescript" && to === "go") {
    const fields = parseTypeScriptFields(body);
    const lines = fields.map((field) => `  ${formatGoFieldName(field.name)} ${mapTypeScriptTypeToGo(field.type)}`);
    return [`type ${name} struct {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }
  if (from === "typescript" && to === "java") {
    const fields = parseTypeScriptFields(body);
    const lines = fields.map((field) => `  private ${mapTypeScriptTypeToJava(field.type)} ${field.name};`);
    return [`public class ${name} {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }
  if (from === "typescript" && to === "cpp") {
    const fields = parseTypeScriptFields(body);
    const lines = fields.map((field) => `  ${mapTypeScriptTypeToCpp(field.type)} ${field.name};`);
    return [`struct ${name} {`, lines.join("\n") || "  // ...", "};"].join("\n");
  }
  if (from === "rust" && to === "python") {
    const fields = parseRustFields(body);
    const lines = fields.map((field) => `    ${field.name}: ${mapRustTypeToPython(field.type)}`);
    return ["@dataclass", `class ${name}:`, lines.join("\n") || "    pass"].join("\n");
  }
  if (from === "rust" && to === "typescript") {
    const fields = parseRustFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapRustTypeToTypeScript(field.type)};`);
    return `export interface ${name} {\n${lines.join("\n")}\n}`;
  }
  if (from === "rust" && to === "go") {
    const fields = parseRustFields(body);
    const lines = fields.map((field) => `  ${formatGoFieldName(field.name)} ${mapRustTypeToGo(field.type)}`);
    return [`type ${name} struct {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }
  if (from === "rust" && to === "java") {
    const fields = parseRustFields(body);
    const lines = fields.map((field) => `  private ${mapRustTypeToJava(field.type)} ${field.name};`);
    return [`public class ${name} {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }
  if (from === "rust" && to === "cpp") {
    const fields = parseRustFields(body);
    const lines = fields.map((field) => `  ${mapRustTypeToCpp(field.type)} ${field.name};`);
    return [`struct ${name} {`, lines.join("\n") || "  // ...", "};"].join("\n");
  }
  if (from === "go" && to === "python") {
    const fields = parseGoFields(body);
    const lines = fields.map((field) => `    ${field.name}: ${mapGoTypeToPython(field.type)}`);
    return ["@dataclass", `class ${name}:`, lines.join("\n") || "    pass"].join("\n");
  }
  if (from === "go" && to === "typescript") {
    const fields = parseGoFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapGoTypeToTypeScript(field.type)};`);
    return `export interface ${name} {\n${lines.join("\n")}\n}`;
  }
  if (from === "go" && to === "rust") {
    const fields = parseGoFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapGoTypeToRust(field.type)},`);
    return ["#[derive(Debug, Clone)]", `struct ${name} {`, lines.join("\n"), "}"]
      .filter(Boolean)
      .join("\n");
  }
  if (from === "go" && to === "java") {
    const fields = parseGoFields(body);
    const lines = fields.map((field) => `  private ${mapGoTypeToJava(field.type)} ${field.name};`);
    return [`public class ${name} {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }
  if (from === "go" && to === "cpp") {
    const fields = parseGoFields(body);
    const lines = fields.map((field) => `  ${mapGoTypeToCpp(field.type)} ${field.name};`);
    return [`struct ${name} {`, lines.join("\n") || "  // ...", "};"].join("\n");
  }
  if (from === "java" && to === "python") {
    const fields = parseJavaFields(body);
    const lines = fields.map((field) => `    ${field.name}: ${mapJavaTypeToPython(field.type)}`);
    return ["@dataclass", `class ${name}:`, lines.join("\n") || "    pass"].join("\n");
  }
  if (from === "java" && to === "typescript") {
    const fields = parseJavaFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapJavaTypeToTypeScript(field.type)};`);
    return `export interface ${name} {\n${lines.join("\n")}\n}`;
  }
  if (from === "java" && to === "rust") {
    const fields = parseJavaFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapJavaTypeToRust(field.type)},`);
    return ["#[derive(Debug, Clone)]", `struct ${name} {`, lines.join("\n"), "}"]
      .filter(Boolean)
      .join("\n");
  }
  if (from === "java" && to === "go") {
    const fields = parseJavaFields(body);
    const lines = fields.map((field) => `  ${formatGoFieldName(field.name)} ${mapJavaTypeToGo(field.type)}`);
    return [`type ${name} struct {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }
  if (from === "java" && to === "cpp") {
    const fields = parseJavaFields(body);
    const lines = fields.map((field) => `  ${mapJavaTypeToCpp(field.type)} ${field.name};`);
    return [`struct ${name} {`, lines.join("\n") || "  // ...", "};"].join("\n");
  }
  if (from === "cpp" && to === "python") {
    const fields = parseCppFields(body);
    const lines = fields.map((field) => `    ${field.name}: ${mapCppTypeToPython(field.type)}`);
    return ["@dataclass", `class ${name}:`, lines.join("\n") || "    pass"].join("\n");
  }
  if (from === "cpp" && to === "typescript") {
    const fields = parseCppFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapCppTypeToTypeScript(field.type)};`);
    return `export interface ${name} {\n${lines.join("\n")}\n}`;
  }
  if (from === "cpp" && to === "rust") {
    const fields = parseCppFields(body);
    const lines = fields.map((field) => `  ${field.name}: ${mapCppTypeToRust(field.type)},`);
    return ["#[derive(Debug, Clone)]", `struct ${name} {`, lines.join("\n"), "}"]
      .filter(Boolean)
      .join("\n");
  }
  if (from === "cpp" && to === "go") {
    const fields = parseCppFields(body);
    const lines = fields.map((field) => `  ${formatGoFieldName(field.name)} ${mapCppTypeToGo(field.type)}`);
    return [`type ${name} struct {`, lines.join("\n") || "  // ...", "}"].join("\n");
  }

  return fallbackTranslation(from, to, code);
}

function translateErrorHandling(match: PatternMatch, from: LanguageId, to: LanguageId, code: string): string {
  if (from === "python" && to === "typescript") {
    const errorVar = match.parameters.errorVar ?? "err";
    return [
      "try {",
      "  // ...",
      "} catch (" + errorVar + ") {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "python" && to === "rust") {
    return [
      "let result = (|| -> Result<(), Box<dyn std::error::Error>> {",
      "  // ...",
      "  Ok(())",
      "})();",
      "if let Err(err) = result {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "python" && to === "go") {
    const errorVar = match.parameters.errorVar ?? "err";
    return [`if ${errorVar} != nil {`, "  // handle error", "}"].join("\n");
  }
  if (from === "typescript" && to === "python") {
    return ["try:", "    # ...", "except Exception as err:", "    # handle error"].join("\n");
  }
  if (from === "typescript" && to === "rust") {
    return [
      "let result = (|| -> Result<(), Box<dyn std::error::Error>> {",
      "  // ...",
      "  Ok(())",
      "})();",
      "if let Err(err) = result {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "typescript" && to === "go") {
    const errorVar = match.parameters.errorVar ?? "err";
    return [`if ${errorVar} != nil {`, "  // handle error", "}"].join("\n");
  }
  if (from === "python" && to === "java") {
    const errorVar = match.parameters.errorVar ?? "e";
    return [
      "try {",
      "  // ...",
      `} catch (Exception ${errorVar}) {`,
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "python" && to === "cpp") {
    return [
      "try {",
      "  // ...",
      "} catch (const std::exception& err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "typescript" && to === "java") {
    return [
      "try {",
      "  // ...",
      "} catch (Exception err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "typescript" && to === "cpp") {
    return [
      "try {",
      "  // ...",
      "} catch (const std::exception& err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "rust" && to === "java") {
    return [
      "import java.util.Optional;",
      "Optional<Object> result = Optional.ofNullable(work());",
      "if (result.isEmpty()) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "rust" && to === "cpp") {
    return [
      "try {",
      "  // ...",
      "} catch (const std::exception& err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "go" && to === "java") {
    return [
      "try {",
      "  // ...",
      "} catch (Exception err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "go" && to === "cpp") {
    return [
      "try {",
      "  // ...",
      "} catch (const std::exception& err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "java" && to === "python") {
    return ["try:", "    # ...", "except Exception as err:", "    # handle error"].join("\n");
  }
  if (from === "java" && to === "typescript") {
    return [
      "try {",
      "  // ...",
      "} catch (err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "java" && to === "rust") {
    return [
      "let result = (|| -> Result<(), Box<dyn std::error::Error>> {",
      "  // ...",
      "  Ok(())",
      "})();",
      "if let Err(err) = result {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "java" && to === "go") {
    return ["if err != nil {", "  // handle error", "}"].join("\n");
  }
  if (from === "java" && to === "cpp") {
    return [
      "#include <string>",
      "#include <variant>",
      "",
      "std::variant<int, std::string> result = work();",
      "if (std::holds_alternative<std::string>(result)) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "cpp" && to === "rust") {
    return [
      "let result = (|| -> Result<(), Box<dyn std::error::Error>> {",
      "  // ...",
      "  Ok(())",
      "})();",
      "if let Err(err) = result {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "cpp" && to === "go") {
    return ["if err != nil {", "  // handle error", "}"].join("\n");
  }
  if (from === "rust" && to === "python") {
    return ["try:", "    # ...", "except Exception as err:", "    # handle error"].join("\n");
  }
  if (from === "rust" && to === "typescript") {
    return [
      "try {",
      "  // ...",
      "} catch (err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "rust" && to === "go") {
    return ["if err != nil {", "  // handle error", "}"].join("\n");
  }
  if (from === "go" && to === "python") {
    return ["try:", "    # ...", "except Exception as err:", "    # handle error"].join("\n");
  }
  if (from === "go" && to === "typescript") {
    return [
      "try {",
      "  // ...",
      "} catch (err) {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  if (from === "go" && to === "rust") {
    return [
      "let result = (|| -> Result<(), Box<dyn std::error::Error>> {",
      "  // ...",
      "  Ok(())",
      "})();",
      "if let Err(err) = result {",
      "  // handle error",
      "}"
    ].join("\n");
  }
  return fallbackTranslation(from, to, code);
}

function translateDictLiteral(
  match: PatternMatch,
  from: LanguageId,
  to: LanguageId,
  code: string,
  decisions: Record<string, string>
): string {
  if (to === "go") {
    const name = match.parameters.name || "data";
    const pairs = (match.parameters.body ?? "")
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
    const entries = pairs
      .map((pair) => {
        const [key, value] = pair.split(":").map((part) => part.trim());
        if (!key || !value) {
          return null;
        }
        const goKey = formatGoMapKey(key);
        return `  ${goKey}: ${value},`;
      })
      .filter(Boolean)
      .join("\n");
    return [`${name} := map[string]any{`, entries || "  // ...", "}"]
      .filter(Boolean)
      .join("\n");
  }
  if (to === "java") {
    const name = match.parameters.name || "data";
    const pairs = (match.parameters.body ?? "")
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
    const entries = pairs
      .map((pair) => {
        const [key, value] = pair.split(":").map((part) => part.trim());
        if (!key || !value) {
          return null;
        }
        const javaKey = formatGoMapKey(key);
        return `${javaKey}, ${value}`;
      })
      .filter(Boolean)
      .join(", ");
    return [
      "import java.util.Map;",
      `Map<String, Object> ${name} = Map.of(${entries || "/* entries */"});`
    ].join("\n");
  }
  if (to === "cpp") {
    const name = match.parameters.name || "data";
    const pairs = (match.parameters.body ?? "")
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
    const entries = pairs
      .map((pair) => {
        const [key, value] = pair.split(":").map((part) => part.trim());
        if (!key || !value) {
          return null;
        }
        const cppKey = formatGoMapKey(key).replace(/^"/, "\"").replace(/"$/, "\"");
        return `{${cppKey}, ${value}}`;
      })
      .filter(Boolean)
      .join(", ");
    return [
      "#include <unordered_map>",
      "#include <string>",
      `std::unordered_map<std::string, int> ${name} = { ${entries} };`
    ].join("\n");
  }
  if (from === "python" && to === "rust") {
    const name = match.parameters.name || "data";
    const mapType = decisions.mapType === "BTreeMap" ? "BTreeMap" : "HashMap";
    const mapPath = mapType === "BTreeMap" ? "std::collections::BTreeMap" : "std::collections::HashMap";
    const pairs = (match.parameters.body ?? "").split(",").map((entry) => entry.trim()).filter(Boolean);
    const inserts = pairs
      .map((pair) => {
        const [key, value] = pair.split(":").map((part) => part.trim());
        if (!key || !value) {
          return null;
        }
        const rustKey = key.startsWith("\"") ? `${key}.to_string()` : `${key}.to_string()`;
        return `  ${name}.insert(${rustKey}, ${value});`;
      })
      .filter(Boolean)
      .join("\n");
    return [
      `use ${mapPath};`,
      `let mut ${name}: ${mapType}<String, _> = ${mapType}::new();`,
      inserts || "// insert values",
      "// use the map"
    ].join("\n");
  }
  if (from === "go" && to === "python") {
    const name = match.parameters.name || "data";
    const body = match.parameters.body ?? "";
    return `${name} = {${body}}`;
  }
  if (from === "go" && to === "typescript") {
    const name = match.parameters.name || "data";
    const body = match.parameters.body ?? "";
    return `const ${name} = { ${body} };`;
  }
  if (from === "go" && to === "rust") {
    const name = match.parameters.name || "data";
    const pairs = (match.parameters.body ?? "").split(",").map((entry) => entry.trim()).filter(Boolean);
    const inserts = pairs
      .map((pair) => {
        const [key, value] = pair.split(":").map((part) => part.trim());
        if (!key || !value) {
          return null;
        }
        const rustKey = key.startsWith("\"") ? `${key}.to_string()` : `${key}.to_string()`;
        return `  ${name}.insert(${rustKey}, ${value});`;
      })
      .filter(Boolean)
      .join("\n");
    return [
      "use std::collections::HashMap;",
      `let mut ${name}: HashMap<String, _> = HashMap::new();`,
      inserts || "// insert values",
      "// use the map"
    ].join("\n");
  }
  return fallbackTranslation(from, to, code);
}

function translateNoneHandling(match: PatternMatch, from: LanguageId, to: LanguageId, code: string): string {
  if (from === "python" && to === "rust") {
    const name = match.parameters.name || "value";
    return [
      `match ${name} {`,
      "  Some(inner) => {",
      "    // handle value",
      "  }",
      "  None => {",
      "    // handle missing value",
      "  }",
      "}"
    ].join("\n");
  }
  if (from === "python" && to === "go") {
    const name = match.parameters.name || "value";
    const negation = match.parameters.negation === "true" ? "!=" : "==";
    return [`if ${name} ${negation} nil {`, "  // handle value", "}"]
      .join("\n");
  }
  if (from === "go" && to === "python") {
    const name = match.parameters.name || "value";
    const negation = match.parameters.negation === "true" ? "is not None" : "is None";
    return `if ${name} ${negation}:\n    # handle value`;
  }
  if (from === "go" && to === "typescript") {
    const name = match.parameters.name || "value";
    const negation = match.parameters.negation === "true" ? "!== null" : "=== null";
    return `if (${name} ${negation}) {\n  // handle value\n}`;
  }
  if (from === "go" && to === "rust") {
    const name = match.parameters.name || "value";
    return [
      `match ${name} {`,
      "  Some(inner) => {",
      "    // handle value",
      "  }",
      "  None => {",
      "    // handle missing value",
      "  }",
      "}"
    ].join("\n");
  }
  if (from === "python" && to === "java") {
    const name = match.parameters.name || "value";
    const negation = match.parameters.negation === "true" ? "!= null" : "== null";
    return `if (${name} ${negation}) {\n  // handle value\n}`;
  }
  if (from === "python" && to === "cpp") {
    const name = match.parameters.name || "value";
    const negation = match.parameters.negation === "true" ? "!= nullptr" : "== nullptr";
    return `if (${name} ${negation}) {\n  // handle value\n}`;
  }
  if (from === "java" && to === "python") {
    const name = match.parameters.name || "value";
    return `if ${name} is None:\n    # handle value`;
  }
  if (from === "cpp" && to === "python") {
    const name = match.parameters.name || "value";
    return `if ${name} is None:\n    # handle value`;
  }
  return fallbackTranslation(from, to, code);
}

function translateGenerics(to: LanguageId): string {
  if (to === "python") {
    return [
      "from typing import Generic, TypeVar",
      "",
      "T = TypeVar(\"T\")",
      "",
      "class Box(Generic[T]):",
      "    def __init__(self, value: T):",
      "        self.value = value"
    ].join("\n");
  }
  if (to === "typescript") {
    return "export function identity<T>(value: T): T {\n  return value;\n}";
  }
  if (to === "rust") {
    return "fn identity<T: Clone>(value: T) -> T {\n  value.clone()\n}";
  }
  if (to === "go") {
    return "func Identity[T any](value T) T {\n  return value\n}";
  }
  if (to === "java") {
    return [
      "public class Box<T> {",
      "  private final T value;",
      "  public Box(T value) { this.value = value; }",
      "  public T getValue() { return value; }",
      "}"
    ].join("\n");
  }
  if (to === "cpp") {
    return [
      "template <typename T>",
      "T identity(const T& value) {",
      "  return value;",
      "}"
    ].join("\n");
  }
  return fallbackTranslation("python", to, "");
}

function translateIterators(to: LanguageId): string {
  if (to === "python") {
    return "def iter_items(items):\n    for item in items:\n        yield item";
  }
  if (to === "typescript") {
    return "export function* iterItems(items: string[]) {\n  for (const item of items) {\n    yield item;\n  }\n}";
  }
  if (to === "rust") {
    return [
      "fn main() {",
      "  let items = vec![1, 2, 3];",
      "  let iter = items.iter().map(|item| item + 1);",
      "  let _ = iter;",
      "}"
    ].join("\n");
  }
  if (to === "go") {
    return "items := []int{1, 2, 3}\nfor _, item := range items {\n  _ = item\n}";
  }
  if (to === "java") {
    return [
      "import java.util.List;",
      "",
      "List<Integer> items = List.of(1, 2, 3);",
      "for (int item : items) {",
      "  // use item",
      "}"
    ].join("\n");
  }
  if (to === "cpp") {
    return [
      "#include <vector>",
      "",
      "std::vector<int> items{1, 2, 3};",
      "for (const auto& item : items) {",
      "  (void)item;",
      "}"
    ].join("\n");
  }
  return fallbackTranslation("python", to, "");
}

function translateClosures(to: LanguageId): string {
  if (to === "python") {
    return "scale = 2\nfn = lambda x: x * scale";
  }
  if (to === "typescript") {
    return "const scale = 2;\nconst fn = (x: number) => x * scale;";
  }
  if (to === "rust") {
    return "let scale = 2;\nlet add = |x: i32| x + scale;";
  }
  if (to === "go") {
    return "scale := 2\nfn := func(x int) int {\n  return x * scale\n}";
  }
  if (to === "java") {
    return [
      "int scale = 2;",
      "java.util.function.Function<Integer, Integer> fn = x -> x * scale;"
    ].join("\n");
  }
  if (to === "cpp") {
    return [
      "int scale = 2;",
      "auto fn = [scale](int x) { return x * scale; };"
    ].join("\n");
  }
  return fallbackTranslation("python", to, "");
}

function translatePatternMatching(to: LanguageId): string {
  if (to === "python") {
    return [
      "match value:",
      "    case 0:",
      "        handle_zero()",
      "    case _:",
      "        handle_other()"
    ].join("\n");
  }
  if (to === "typescript") {
    return [
      "type Value = { kind: \"a\" } | { kind: \"other\" };",
      "const value: Value = { kind: \"a\" };",
      "function handleA(_value: Value) {}",
      "function handleOther(_value: Value) {}",
      "switch (value.kind) {",
      "  case \"a\":",
      "    handleA(value);",
      "    break;",
      "  default:",
      "    handleOther(value);",
      "}"
    ].join("\n");
  }
  if (to === "rust") {
    return [
      "fn handle_zero() {}",
      "fn handle_other() {}",
      "fn main() {",
      "  let value = 0;",
      "  match value {",
      "    0 => handle_zero(),",
      "    _ => handle_other(),",
      "  }",
      "}"
    ].join("\n");
  }
  if (to === "go") {
    return [
      "var value any",
      "switch v := value.(type) {",
      "case int:",
      "  _ = v",
      "default:",
      "  // handle other",
      "}"
    ].join("\n");
  }
  if (to === "java") {
    return [
      "String value = \"a\";",
      "switch (value) {",
      "  case \"a\" -> handleA();",
      "  default -> handleOther();",
      "}",
      "",
      "static void handleA() {}",
      "static void handleOther() {}"
    ].join("\n");
  }
  if (to === "cpp") {
    return [
      "int value = 0;",
      "switch (value) {",
      "  case 0:",
      "    handle_zero();",
      "    break;",
      "  default:",
      "    handle_other();",
      "}",
      "void handle_zero() {}",
      "void handle_other() {}"
    ].join("\n");
  }
  return fallbackTranslation("python", to, "");
}

function translateConcurrencyPatterns(to: LanguageId): string {
  if (to === "python") {
    return [
      "async def main():",
      "    results = await asyncio.gather(task_a(), task_b())",
      "    return results"
    ].join("\n");
  }
  if (to === "typescript") {
    return [
      "async function taskA(): Promise<number> { return 1; }",
      "async function taskB(): Promise<number> { return 2; }",
      "export async function main() {",
      "  const [a, b] = await Promise.all([taskA(), taskB()]);",
      "  return { a, b };",
      "}"
    ].join("\n");
  }
  if (to === "rust") {
    return [
      "use std::thread;",
      "",
      "fn task_a() -> i32 { 1 }",
      "fn task_b() -> i32 { 2 }",
      "",
      "fn main() {",
      "  let handle_a = thread::spawn(|| task_a());",
      "  let handle_b = thread::spawn(|| task_b());",
      "  let _ = handle_a.join();",
      "  let _ = handle_b.join();",
      "}"
    ].join("\n");
  }
  if (to === "go") {
    return [
      "taskA := func() int { return 1 }",
      "taskB := func() int { return 2 }",
      "ch := make(chan int)",
      "go func() {",
      "  ch <- taskA()",
      "}()",
      "go func() {",
      "  ch <- taskB()",
      "}()",
      "a := <-ch",
      "b := <-ch",
      "_ = a",
      "_ = b"
    ].join("\n");
  }
  if (to === "java") {
    return [
      "import java.util.concurrent.CompletableFuture;",
      "",
      "CompletableFuture<Integer> a = CompletableFuture.supplyAsync(() -> 1);",
      "CompletableFuture<Integer> b = CompletableFuture.supplyAsync(() -> 2);",
      "CompletableFuture.allOf(a, b).join();",
      "int resultA = a.join();",
      "int resultB = b.join();"
    ].join("\n");
  }
  if (to === "cpp") {
    return [
      "#include <future>",
      "",
      "auto a = std::async(std::launch::async, [] { return 1; });",
      "auto b = std::async(std::launch::async, [] { return 2; });",
      "auto resultA = a.get();",
      "auto resultB = b.get();",
      "(void)resultA;",
      "(void)resultB;"
    ].join("\n");
  }
  return fallbackTranslation("python", to, "");
}

function fallbackTranslation(from: LanguageId, to: LanguageId, code: string): string {
  const comment = to === "python" ? "#" : "//";
  return `${comment} TODO: Translation not implemented for ${from} -> ${to}.\n${code}`;
}

function addManualReviewComment(target: LanguageId, message: string, code: string): string {
  const comment = target === "python" ? "#" : "//";
  return `${comment} TODO: ${message}\n${code}`;
}

function buildDecisions(
  match: PatternMatch,
  from: LanguageId,
  to: LanguageId,
  code: string
): TranslationDecision[] {
  const decisions: TranslationDecision[] = [];
  if (from === "python" && to === "rust" && match.id === "dict-literal") {
    decisions.push({
      id: "mapType",
      prompt: "Python dict can map to HashMap or BTreeMap. Choose the target container:",
      options: ["HashMap", "BTreeMap"],
      defaultOption: "HashMap"
    });
  }
  if (from === "typescript" && to === "rust" && /:\s*any\b/.test(code)) {
    decisions.push({
      id: "anyStrategy",
      prompt: "TypeScript any can map to serde_json::Value or a generic placeholder. Choose:",
      options: ["serde_json::Value", "generic"],
      defaultOption: "serde_json::Value"
    });
  }
  return decisions;
}

function resolveDecisions(
  decisions: TranslationDecision[],
  options: TranslationOptions
): Record<string, string> {
  const resolved: Record<string, string> = {};
  for (const decision of decisions) {
    resolved[decision.id] = options.decisions?.[decision.id] ?? decision.defaultOption;
  }
  return resolved;
}

function extractConceptsFromPatterns(patterns: PatternMatch[]): string[] {
  const map: Record<string, string> = {
    "list-comprehension": "data-structures.list",
    decorator: "paradigms.oop",
    "async-await": "control-flow.async-await",
    dataclass: "paradigms.oop",
    "error-handling": "control-flow.exceptions",
    "dict-literal": "data-structures.map",
    "none-handling": "control-flow.result",
    generics: "paradigms.generics",
    iterators: "data-structures.iterators",
    closures: "paradigms.closures",
    "pattern-matching": "control-flow.pattern-matching",
    "concurrency-patterns": "concurrency.patterns"
  };
  return Array.from(
    new Set(patterns.map((pattern) => map[pattern.id]).filter((value): value is string => Boolean(value)))
  );
}

function parseArrowFunction(input: string): { param: string; body: string } | null {
  const arrowIndex = input.indexOf("=>");
  if (arrowIndex === -1) {
    return null;
  }
  const paramsRaw = input.slice(0, arrowIndex).trim();
  const bodyRaw = input.slice(arrowIndex + 2).trim();
  const rawParam = paramsRaw.replace(/^\(|\)$/g, "").trim();
  const param = rawParam
    .split(",")[0]
    ?.replace(/:\s*[^=]+/g, "")
    .replace(/=.+$/, "")
    .trim() || "item";
  const body = bodyRaw.startsWith("{")
    ? bodyRaw.replace(/^\{/, "").replace(/\}$/, "").replace(/^return\s+/, "").replace(/;$/, "").trim()
    : bodyRaw.replace(/;$/, "").trim();
  return { param, body };
}

function parseJavaLambda(input: string): { param: string; body: string } | null {
  const arrowIndex = input.indexOf("->");
  if (arrowIndex === -1) {
    return null;
  }
  const paramsRaw = input.slice(0, arrowIndex).trim();
  const bodyRaw = input.slice(arrowIndex + 2).trim();
  const rawParam = paramsRaw.replace(/^\(|\)$/g, "").trim();
  const param = rawParam.split(",")[0]?.split(" ").pop()?.trim() || "item";
  const body = bodyRaw.startsWith("{")
    ? bodyRaw.replace(/^\{/, "").replace(/\}$/, "").replace(/^return\s+/, "").replace(/;$/, "").trim()
    : bodyRaw.replace(/;$/, "").trim();
  return { param, body };
}

function parseCppLambda(input: string): { param: string; body: string } | null {
  const match = /\[[^\]]*\]\s*\((?<params>[^)]*)\)\s*\{(?<body>[\s\S]*)\}/.exec(input.trim());
  if (!match || !match.groups) {
    return null;
  }
  const paramsRaw = match.groups.params ?? "";
  const rawParam = paramsRaw.split(",")[0]?.trim() ?? "item";
  const param = rawParam.split(" ").pop()?.trim() || "item";
  const bodyRaw = (match.groups.body ?? "").trim();
  const body = bodyRaw.replace(/^return\s+/, "").replace(/;$/, "").trim();
  return { param, body: body || param };
}

function parseRustClosure(input: string): { param: string; body: string } | null {
  const match = /\|(?<param>\w+)\|\s*(?<body>.+)/.exec(input.trim());
  if (!match || !match.groups) {
    return null;
  }
  return {
    param: (match.groups.param ?? "item").trim(),
    body: (match.groups.body ?? "item").trim()
  };
}

function extractSignature(from: LanguageId, name: string, code: string): string {
  if (from === "python") {
    const match = new RegExp(`(?:async\\s+)?def\\s+${name}\\s*\\(([^)]*)\\)`).exec(code);
    if (match?.[1]) {
      return match[1].trim();
    }
  }
  if (from === "typescript" || from === "javascript") {
    const match = new RegExp(`(?:async\\s+)?function\\s+${name}\\s*\\(([^)]*)\\)`).exec(code);
    if (match?.[1]) {
      return match[1].trim();
    }
  }
  if (from === "rust") {
    const match = new RegExp(`(?:async\\s+)?fn\\s+${name}\\s*\\(([^)]*)\\)`).exec(code);
    if (match?.[1]) {
      return match[1].trim();
    }
  }
    if (from === "go") {
      const match = new RegExp(`func\\s+${name}\\s*\\(([^)]*)\\)`).exec(code);
      if (match?.[1]) {
        return match[1].trim();
      }
    }
  return "";
}

function extractAwaitExpression(from: LanguageId, code: string): string | null {
  if (from === "python") {
    const match = /await\s+([^\n]+)/.exec(code);
    return match?.[1]?.trim() ?? null;
  }
  if (from === "typescript" || from === "javascript") {
    const match = /await\s+([^;\n]+)/.exec(code);
    return match?.[1]?.trim() ?? null;
  }
  if (from === "rust") {
    const match = /([^;\n]+)\.await/.exec(code);
    return match?.[1]?.trim() ?? null;
  }
  return null;
}

function stripGoSignature(signature: string): string {
  if (!signature.trim()) {
    return "";
  }
  return signature
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const nameMatch = /^(?<name>\w+)/.exec(part);
      return nameMatch?.groups?.name ?? "arg";
    })
    .join(", ");
}

type Field = { name: string; type: string; defaultValue: string | undefined };

function parsePythonFields(body: string): Field[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const match = /(?<name>\w+)\s*:\s*(?<type>[^=]+?)(?:\s*=\s*(?<default>.+))?$/.exec(line);
      if (!match || !match.groups) {
        return null;
      }
      const name = match.groups.name ?? "field";
      const type = match.groups.type ?? "unknown";
      return {
        name: name.trim(),
        type: type.trim(),
        defaultValue: match.groups.default?.trim()
      } as Field;
    })
    .filter((field): field is Field => field !== null);
}

function parseTypeScriptFields(body: string): Field[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && line.includes(":"))
    .map((line) => {
      const match = /(?<name>\w+)\??\s*:\s*(?<type>[^;]+);?/.exec(line);
      if (!match || !match.groups) {
        return null;
      }
      const name = match.groups.name ?? "field";
      const type = match.groups.type ?? "unknown";
      return {
        name: name.trim(),
        type: type.trim(),
        defaultValue: undefined
      } as Field;
    })
    .filter((field): field is Field => field !== null);
}

function parseRustFields(body: string): Field[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && line.includes(":"))
    .map((line) => {
      const match = /(?<name>\w+)\s*:\s*(?<type>[^,]+),?/.exec(line);
      if (!match || !match.groups) {
        return null;
      }
      const name = match.groups.name ?? "field";
      const type = match.groups.type ?? "unknown";
      return {
        name: name.trim(),
        type: type.trim(),
        defaultValue: undefined
      } as Field;
    })
    .filter((field): field is Field => field !== null);
}

function parseGoFields(body: string): Field[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("//"))
    .map((line) => {
      const match = /(?<name>\w+)\s+(?<type>[^`]+?)(?:\s+`[^`]+`)?$/.exec(line);
      if (!match || !match.groups) {
        return null;
      }
      const name = match.groups.name ?? "field";
      const type = match.groups.type ?? "unknown";
      return {
        name: name.trim(),
        type: type.trim(),
        defaultValue: undefined
      } as Field;
    })
    .filter((field): field is Field => field !== null);
}

function parseJavaFields(body: string): Field[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("//") && !line.startsWith("@"))
    .map((line) => {
      const match = /(?<type>[\w<>[\]]+)\s+(?<name>\w+)\s*;/.exec(line);
      if (!match || !match.groups) {
        return null;
      }
      return {
        name: (match.groups.name ?? "field").trim(),
        type: (match.groups.type ?? "Object").trim(),
        defaultValue: undefined
      } as Field;
    })
    .filter((field): field is Field => field !== null);
}

function parseCppFields(body: string): Field[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("//"))
    .map((line) => {
      const match = /(?<type>[\w:<>]+)\s+(?<name>\w+)\s*;/.exec(line);
      if (!match || !match.groups) {
        return null;
      }
      return {
        name: (match.groups.name ?? "field").trim(),
        type: (match.groups.type ?? "auto").trim(),
        defaultValue: undefined
      } as Field;
    })
    .filter((field): field is Field => field !== null);
}

function formatGoFieldName(name: string): string {
  if (!name) {
    return "Field";
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatGoMapKey(key: string): string {
  const trimmed = key.trim();
  if (trimmed.startsWith("\"")) {
    return trimmed;
  }
  if (trimmed.startsWith("'")) {
    return `"${trimmed.slice(1, -1)}"`;
  }
  return `"${trimmed}"`;
}

function mapPythonTypeToTypeScript(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("list[") || normalized.startsWith("list[")) {
    return "Array<unknown>";
  }
  if (normalized.startsWith("dict[") || normalized.startsWith("dict{")) {
    return "Record<string, unknown>";
  }
  if (normalized.includes("optional")) {
    return "unknown | null";
  }
  switch (normalized) {
    case "int":
    case "float":
      return "number";
    case "str":
      return "string";
    case "bool":
      return "boolean";
    case "any":
      return "any";
    default:
      return "unknown";
  }
}

function mapPythonTypeToRust(type: string, defaultValue?: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (defaultValue && defaultValue.toLowerCase() === "none") {
    return `Option<${mapPythonTypeToRust(type)}>`;
  }
  if (normalized.startsWith("list[") || normalized.startsWith("list[")) {
    return "Vec<_>";
  }
  if (normalized.startsWith("dict[") || normalized.startsWith("dict{")) {
    return "std::collections::HashMap<String, _>";
  }
  if (normalized.includes("optional")) {
    return "Option<_>";
  }
  switch (normalized) {
    case "int":
      return "i32";
    case "float":
      return "f64";
    case "str":
      return "String";
    case "bool":
      return "bool";
    default:
      return "String";
  }
}

function mapPythonTypeToGo(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("list[")) {
    return "[]any";
  }
  if (normalized.startsWith("dict[")) {
    return "map[string]any";
  }
  if (normalized.includes("optional")) {
    return "*any";
  }
  switch (normalized) {
    case "int":
      return "int";
    case "float":
      return "float64";
    case "str":
      return "string";
    case "bool":
      return "bool";
    case "any":
      return "any";
    default:
      return "any";
  }
}

function mapPythonTypeToJava(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("list[")) {
    return "List<Object>";
  }
  if (normalized.startsWith("dict[")) {
    return "Map<String, Object>";
  }
  switch (normalized) {
    case "int":
      return "int";
    case "float":
      return "double";
    case "str":
      return "String";
    case "bool":
      return "boolean";
    default:
      return "Object";
  }
}

function mapPythonTypeToCpp(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("list[")) {
    return "std::vector<int>";
  }
  if (normalized.startsWith("dict[")) {
    return "std::unordered_map<std::string, int>";
  }
  switch (normalized) {
    case "int":
      return "int";
    case "float":
      return "double";
    case "str":
      return "std::string";
    case "bool":
      return "bool";
    default:
      return "auto";
  }
}

function mapTypeScriptTypeToPython(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("array")) {
    return "list";
  }
  if (normalized.startsWith("record")) {
    return "dict";
  }
  if (normalized.includes("null")) {
    return "Optional";
  }
  switch (normalized) {
    case "number":
      return "float";
    case "string":
      return "str";
    case "boolean":
      return "bool";
    default:
      return "Any";
  }
}

function mapTypeScriptTypeToRust(type: string, anyStrategy?: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("array")) {
    return "Vec<_>";
  }
  if (normalized.startsWith("record")) {
    return "std::collections::HashMap<String, _>";
  }
  if (normalized.includes("null")) {
    return "Option<_>";
  }
  if (normalized === "any") {
    return anyStrategy === "generic" ? "T" : "serde_json::Value";
  }
  switch (normalized) {
    case "number":
      return "f64";
    case "string":
      return "String";
    case "boolean":
      return "bool";
    default:
      return "String";
  }
}

function mapTypeScriptTypeToGo(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("array")) {
    return "[]any";
  }
  if (normalized.startsWith("record")) {
    return "map[string]any";
  }
  if (normalized.includes("null")) {
    return "*any";
  }
  if (normalized === "any") {
    return "any";
  }
  switch (normalized) {
    case "number":
      return "float64";
    case "string":
      return "string";
    case "boolean":
      return "bool";
    default:
      return "any";
  }
}

function mapTypeScriptTypeToJava(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("array")) {
    return "List<Object>";
  }
  if (normalized.startsWith("record")) {
    return "Map<String, Object>";
  }
  switch (normalized) {
    case "number":
      return "double";
    case "string":
      return "String";
    case "boolean":
      return "boolean";
    default:
      return "Object";
  }
}

function mapTypeScriptTypeToCpp(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("array")) {
    return "std::vector<int>";
  }
  if (normalized.startsWith("record")) {
    return "std::unordered_map<std::string, int>";
  }
  switch (normalized) {
    case "number":
      return "double";
    case "string":
      return "std::string";
    case "boolean":
      return "bool";
    default:
      return "auto";
  }
}

function mapRustTypeToPython(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("vec")) {
    return "list";
  }
  if (normalized.startsWith("hashmap")) {
    return "dict";
  }
  if (normalized.startsWith("option")) {
    return "Optional";
  }
  if (normalized.includes("i32") || normalized.includes("i64") || normalized.includes("u32") || normalized.includes("u64")) {
    return "int";
  }
  if (normalized.includes("f32") || normalized.includes("f64")) {
    return "float";
  }
  if (normalized.includes("bool")) {
    return "bool";
  }
  return "str";
}

function mapRustTypeToTypeScript(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("vec")) {
    return "Array<unknown>";
  }
  if (normalized.startsWith("hashmap")) {
    return "Record<string, unknown>";
  }
  if (normalized.startsWith("option")) {
    return "unknown | null";
  }
  if (normalized.includes("i32") || normalized.includes("i64") || normalized.includes("u32") || normalized.includes("u64") || normalized.includes("f32") || normalized.includes("f64")) {
    return "number";
  }
  if (normalized.includes("bool")) {
    return "boolean";
  }
  return "string";
}

function mapRustTypeToJava(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("vec")) {
    return "List<Object>";
  }
  if (normalized.startsWith("hashmap")) {
    return "Map<String, Object>";
  }
  switch (normalized) {
    case "i32":
    case "i64":
    case "u32":
    case "u64":
      return "long";
    case "f32":
    case "f64":
      return "double";
    case "bool":
      return "boolean";
    case "string":
      return "String";
    default:
      return "Object";
  }
}

function mapRustTypeToCpp(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("vec")) {
    return "std::vector<int>";
  }
  if (normalized.startsWith("hashmap")) {
    return "std::unordered_map<std::string, int>";
  }
  switch (normalized) {
    case "i32":
    case "i64":
    case "u32":
    case "u64":
      return "long long";
    case "f32":
    case "f64":
      return "double";
    case "bool":
      return "bool";
    case "string":
      return "std::string";
    default:
      return "auto";
  }
}

function mapRustTypeToGo(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("vec")) {
    return "[]any";
  }
  if (normalized.startsWith("hashmap")) {
    return "map[string]any";
  }
  if (normalized.startsWith("option")) {
    return "*any";
  }
  if (normalized.includes("i32") || normalized.includes("i64") || normalized.includes("u32") || normalized.includes("u64")) {
    return "int";
  }
  if (normalized.includes("f32") || normalized.includes("f64")) {
    return "float64";
  }
  if (normalized.includes("bool")) {
    return "bool";
  }
  if (normalized.includes("string")) {
    return "string";
  }
  return "any";
}

function mapGoTypeToJava(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("[]")) {
    return "List<Object>";
  }
  if (normalized.startsWith("map[")) {
    return "Map<String, Object>";
  }
  switch (normalized) {
    case "int":
    case "int32":
    case "int64":
    case "uint":
      return "long";
    case "float32":
    case "float64":
      return "double";
    case "bool":
      return "boolean";
    case "string":
      return "String";
    default:
      return "Object";
  }
}

function mapGoTypeToCpp(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("[]")) {
    return "std::vector<int>";
  }
  if (normalized.startsWith("map[")) {
    return "std::unordered_map<std::string, int>";
  }
  switch (normalized) {
    case "int":
    case "int32":
    case "int64":
    case "uint":
      return "long long";
    case "float32":
    case "float64":
      return "double";
    case "bool":
      return "bool";
    case "string":
      return "std::string";
    default:
      return "auto";
  }
}

function mapGoTypeToPython(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("[]")) {
    return "list";
  }
  if (normalized.startsWith("map[")) {
    return "dict";
  }
  if (normalized.startsWith("*")) {
    return "Optional";
  }
  switch (normalized) {
    case "int":
    case "int32":
    case "int64":
    case "uint":
      return "int";
    case "float32":
    case "float64":
      return "float";
    case "bool":
      return "bool";
    case "string":
      return "str";
    default:
      return "Any";
  }
}

function mapGoTypeToTypeScript(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("[]")) {
    return "Array<unknown>";
  }
  if (normalized.startsWith("map[")) {
    return "Record<string, unknown>";
  }
  if (normalized.startsWith("*")) {
    return "unknown | null";
  }
  switch (normalized) {
    case "int":
    case "int32":
    case "int64":
    case "uint":
    case "float32":
    case "float64":
      return "number";
    case "bool":
      return "boolean";
    case "string":
      return "string";
    default:
      return "unknown";
  }
}

function mapGoTypeToRust(type: string): string {
  const normalized = type.replace(/\s+/g, "").toLowerCase();
  if (normalized.startsWith("[]")) {
    return "Vec<_>";
  }
  if (normalized.startsWith("map[")) {
    return "std::collections::HashMap<String, _>";
  }
  if (normalized.startsWith("*")) {
    return "Option<_>";
  }
  switch (normalized) {
    case "int":
    case "int32":
    case "int64":
    case "uint":
      return "i64";
    case "float32":
    case "float64":
      return "f64";
    case "bool":
      return "bool";
    case "string":
      return "String";
    default:
      return "String";
  }

}

    function mapJavaTypeToPython(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("list<")) {
        return "list";
      }
      if (normalized.startsWith("map<")) {
        return "dict";
      }
      switch (normalized) {
        case "int":
        case "integer":
        case "long":
          return "int";
        case "double":
        case "float":
          return "float";
        case "boolean":
          return "bool";
        case "string":
          return "str";
        default:
          return "Any";
      }
    }

    function mapJavaTypeToTypeScript(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("list<")) {
        return "Array<unknown>";
      }
      if (normalized.startsWith("map<")) {
        return "Record<string, unknown>";
      }
      switch (normalized) {
        case "int":
        case "integer":
        case "long":
        case "double":
        case "float":
          return "number";
        case "boolean":
          return "boolean";
        case "string":
          return "string";
        default:
          return "unknown";
      }
    }

    function mapJavaTypeToRust(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("list<")) {
        return "Vec<_>";
      }
      if (normalized.startsWith("map<")) {
        return "std::collections::HashMap<String, _>";
      }
      switch (normalized) {
        case "int":
        case "integer":
          return "i32";
        case "long":
          return "i64";
        case "double":
        case "float":
          return "f64";
        case "boolean":
          return "bool";
        case "string":
          return "String";
        default:
          return "String";
      }
    }

    function mapJavaTypeToGo(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("list<")) {
        return "[]any";
      }
      if (normalized.startsWith("map<")) {
        return "map[string]any";
      }
      switch (normalized) {
        case "int":
        case "integer":
        case "long":
          return "int";
        case "double":
        case "float":
          return "float64";
        case "boolean":
          return "bool";
        case "string":
          return "string";
        default:
          return "any";
      }
    }

    function mapJavaTypeToCpp(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("list<")) {
        return "std::vector<int>";
      }
      if (normalized.startsWith("map<")) {
        return "std::unordered_map<std::string, int>";
      }
      switch (normalized) {
        case "int":
        case "integer":
        case "long":
          return "int";
        case "double":
        case "float":
          return "double";
        case "boolean":
          return "bool";
        case "string":
          return "std::string";
        default:
          return "auto";
      }
    }

    function mapCppTypeToPython(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("std::vector")) {
        return "list";
      }
      if (normalized.startsWith("std::unordered_map") || normalized.startsWith("std::map")) {
        return "dict";
      }
      if (normalized.includes("string")) {
        return "str";
      }
      if (normalized.includes("bool")) {
        return "bool";
      }
      if (normalized.includes("int") || normalized.includes("long")) {
        return "int";
      }
      if (normalized.includes("float") || normalized.includes("double")) {
        return "float";
      }
      return "Any";
    }

    function mapCppTypeToTypeScript(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("std::vector")) {
        return "Array<unknown>";
      }
      if (normalized.startsWith("std::unordered_map") || normalized.startsWith("std::map")) {
        return "Record<string, unknown>";
      }
      if (normalized.includes("string")) {
        return "string";
      }
      if (normalized.includes("bool")) {
        return "boolean";
      }
      if (normalized.includes("int") || normalized.includes("long") || normalized.includes("float") || normalized.includes("double")) {
        return "number";
      }
      return "unknown";
    }

    function mapCppTypeToRust(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("std::vector")) {
        return "Vec<_>";
      }
      if (normalized.startsWith("std::unordered_map") || normalized.startsWith("std::map")) {
        return "std::collections::HashMap<String, _>";
      }
      if (normalized.includes("string")) {
        return "String";
      }
      if (normalized.includes("bool")) {
        return "bool";
      }
      if (normalized.includes("int") || normalized.includes("long")) {
        return "i64";
      }
      if (normalized.includes("float") || normalized.includes("double")) {
        return "f64";
      }
      return "String";
    }

    function mapCppTypeToGo(type: string): string {
      const normalized = type.replace(/\s+/g, "").toLowerCase();
      if (normalized.startsWith("std::vector")) {
        return "[]any";
      }
      if (normalized.startsWith("std::unordered_map") || normalized.startsWith("std::map")) {
        return "map[string]any";
      }
      if (normalized.includes("string")) {
        return "string";
      }
      if (normalized.includes("bool")) {
        return "bool";
      }
      if (normalized.includes("int") || normalized.includes("long")) {
        return "int";
      }
      if (normalized.includes("float") || normalized.includes("double")) {
        return "float64";
      }
      return "any";
    }

