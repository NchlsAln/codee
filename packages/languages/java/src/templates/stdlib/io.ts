export function ioTemplate(): string {
  return "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class IoSample {\n  public static void main(String[] args) throws IOException {\n    Path path = Path.of(\"input.txt\");\n    if (!Files.exists(path)) {\n      Files.writeString(path, \"hello\");\n    }\n    String content = Files.readString(path);\n    System.out.println(content.trim());\n  }\n}\n";
}
