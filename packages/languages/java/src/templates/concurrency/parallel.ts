export function parallelTemplate(): string {
  return "import java.util.List;\n\npublic class ParallelSample {\n  public static void main(String[] args) {\n    List<Integer> values = List.of(1, 2, 3, 4);\n    int sum = values.parallelStream().mapToInt(v -> v * v).sum();\n    System.out.println(sum);\n  }\n}\n";
}
