"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferPythonTypes = inferPythonTypes;
function inferPythonTypes(source) {
    const hints = new Set();
    if (source.match(/def\s+\w+\(.*\)\s*->/)) {
        hints.add("return-annotations");
    }
    if (source.includes(": ")) {
        hints.add("variable-annotations");
    }
    if (source.includes("TypedDict") || source.includes("Protocol")) {
        hints.add("structural-typing");
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
    if (source.includes("TypeVar") || source.includes("Generic[")) {
        hints.add("generics");
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
    if (source.includes("list[") || source.includes("List[")) {
        hints.add("parametrized-collections");
    }
    if (hints.size === 0) {
        hints.add("dynamic");
    }
    return Array.from(hints);
}
