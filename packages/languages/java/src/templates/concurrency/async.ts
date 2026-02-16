export function asyncTemplate(): string {
  return "import java.util.concurrent.CompletableFuture;\n\npublic class AsyncSample {\n  public static void main(String[] args) {\n    CompletableFuture<String> a = CompletableFuture.supplyAsync(() -> \"a\");\n    CompletableFuture<String> b = CompletableFuture.supplyAsync(() -> \"b\");\n    CompletableFuture.allOf(a, b).join();\n    System.out.println(a.join() + b.join());\n  }\n}\n";
}
