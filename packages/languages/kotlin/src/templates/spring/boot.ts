export function springBootTemplate(): string {
  return [
    "import org.springframework.boot.autoconfigure.SpringBootApplication",
    "import org.springframework.boot.runApplication",
    "import org.springframework.web.bind.annotation.GetMapping",
    "import org.springframework.web.bind.annotation.RestController",
    "",
    "@SpringBootApplication",
    "class App",
    "",
    "@RestController",
    "class HelloController {",
    "  @GetMapping(\"/hello\")",
    "  fun hello(): String = \"hello\"",
    "}",
    "",
    "fun main(args: Array<String>) {",
    "  runApplication<App>(*args)",
    "}"
  ].join("\n");
}
