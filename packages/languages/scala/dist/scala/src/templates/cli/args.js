"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "case class Config(port: Int = 8080)",
        "",
        "val builder = scopt.OParser.builder[Config]",
        "val parser = {",
        "  import builder._",
        "  OParser.sequence(",
        "    programName(\"app\"),",
        "    opt[Int](\"port\").action((x, c) => c.copy(port = x))",
        "  )",
        "}",
        "",
        "scopt.OParser.parse(parser, args, Config()).foreach(println)"
    ].join("\n");
}
