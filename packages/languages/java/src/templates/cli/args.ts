export function cliArgsTemplate(): string {
  return "import picocli.CommandLine;\nimport picocli.CommandLine.Command;\nimport picocli.CommandLine.Option;\n\n@Command(name = \"app\")\npublic class App implements Runnable {\n  @Option(names = \"--count\", defaultValue = \"1\")\n  int count;\n\n  @Override\n  public void run() {\n    System.out.println(count);\n  }\n\n  public static void main(String[] args) {\n    new CommandLine(new App()).execute(args);\n  }\n}\n";
}
