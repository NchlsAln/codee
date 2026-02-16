import { LanguageId } from "../../types";

export function graphTraversalTemplate(language: LanguageId): string {
  switch (language) {
    case "python":
      return "def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    for neighbor in graph.get(start, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited\n";
    case "typescript":
      return "export function dfs(graph: Record<string, string[]>, start: string, visited = new Set<string>()) {\n  visited.add(start);\n  for (const neighbor of graph[start] ?? []) {\n    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);\n  }\n  return visited;\n}\n";
    case "rust":
      return "// TODO: Implement DFS in Rust\n";
    case "go":
      return "func dfs(graph map[string][]string, start string, visited map[string]bool) map[string]bool {\n  if visited == nil {\n    visited = map[string]bool{}\n  }\n  visited[start] = true\n  for _, neighbor := range graph[start] {\n    if !visited[neighbor] {\n      dfs(graph, neighbor, visited)\n    }\n  }\n  return visited\n}\n";
    default:
      return "// TODO: Implement template";
  }
}
