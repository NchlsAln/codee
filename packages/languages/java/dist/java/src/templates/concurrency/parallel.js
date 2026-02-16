"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return "import java.util.List;\n\npublic class ParallelSample {\n  public static void main(String[] args) {\n    List<Integer> values = List.of(1, 2, 3, 4);\n    int sum = values.parallelStream().mapToInt(v -> v * v).sum();\n    System.out.println(sum);\n  }\n}\n";
}
