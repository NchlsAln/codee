export function inferPythonTypes(source: string): string[] {
  const hints = new Set<string>();

  if (source.match(/def\s+\w+\(.*\)\s*->/)) {
    hints.add("return-annotations");
  }
  if (source.includes(": ")) {
    hints.add("variable-annotations");
  }
  if (source.includes("TypedDict") || source.includes("Protocol")) {
    hints.add("structural-typing");
  }
  if (source.includes("runtime_checkable")) {
    hints.add("runtime-protocols");
  }
  if (source.includes("TypeVar") || source.includes("Generic[")) {
    hints.add("generics");
  }
  if (source.includes("ParamSpec") || source.includes("Concatenate")) {
    hints.add("callable-generics");
  }
  if (source.includes("TypeGuard") || source.includes("TypeIs")) {
    hints.add("type-guards");
  }
  if (
    source.includes("TypedDict") ||
    source.includes("NotRequired") ||
    source.includes("Required")
  ) {
    hints.add("typed-dict");
  }
  if (source.includes("Unpack") || source.includes("TypeVarTuple")) {
    hints.add("variadic-generics");
  }
  if (source.includes("dataclass")) {
    hints.add("dataclass");
  }
  if (source.includes("Optional[") || source.includes("| None")) {
    hints.add("optional-types");
  }
  if (source.includes("Union[") || source.includes("|")) {
    hints.add("union-types");
  }
  if (source.includes("Literal[")) {
    hints.add("literal-types");
  }
  if (source.includes("Any")) {
    hints.add("dynamic-any");
  }
  if (source.includes("np.ndarray")) {
    hints.add("numeric-array");
  }
  if (source.includes("pd.DataFrame")) {
    hints.add("dataframe");
  }
  if (source.includes("cast(")) {
    hints.add("type-narrowing");
  }
  if (source.includes("assert isinstance") || source.includes("isinstance(")) {
    hints.add("runtime-narrowing");
  }
  if (source.includes("mypy:") || source.includes("pyright:")) {
    hints.add("type-checker-config");
  }
  if (source.includes("strict") && source.includes("mypy")) {
    hints.add("strict-typing");
  }
  if (source.includes("typing_extensions")) {
    hints.add("backport-types");
  }
  if (source.includes("list[") || source.includes("List[")) {
    hints.add("parametrized-collections");
  }

  if (hints.size === 0) {
    hints.add("dynamic");
  }

  return Array.from(hints);
}
