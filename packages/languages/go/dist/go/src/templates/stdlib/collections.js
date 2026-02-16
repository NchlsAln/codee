"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return "package main\n\nimport \"fmt\"\n\nfunc main() {\n  counts := map[string]int{}\n  words := []string{\"red\", \"blue\", \"red\"}\n  for _, word := range words {\n    counts[word]++\n  }\n  fmt.Println(counts)\n}\n";
}
