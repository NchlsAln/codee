"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferJavaTypes = inferJavaTypes;
function inferJavaTypes(source) {
    const hints = new Set();
    if (source.includes("var ")) {
        hints.add("local-var-inference");
    }
    if (source.includes("Optional<")) {
        hints.add("optional");
    }
    if (source.includes("List<") || source.includes("Map<")) {
        hints.add("generics");
    }
    if (source.includes("record ")) {
        hints.add("records");
    }
    if (source.includes("sealed ") || source.includes("permits")) {
        hints.add("sealed-types");
    }
    if (source.includes("extends") || source.includes("super")) {
        hints.add("wildcards");
    }
    if (source.includes("@Nullable") || source.includes("@NonNull")) {
        hints.add("nullability-annotations");
    }
    if (hints.size === 0) {
        hints.add("explicit-types");
    }
    return Array.from(hints);
}
