"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "import com.github.ajalt.clikt.core.CliktCommand",
        "import com.github.ajalt.clikt.parameters.options.option",
        "import com.github.ajalt.clikt.parameters.options.default",
        "",
        "class App : CliktCommand() {",
        "  private val count by option(\"--count\").default(\"1\")",
        "  override fun run() { println(count) }",
        "}",
        "",
        "fun main(args: Array<String>) = App().main(args)"
    ].join("\n");
}
