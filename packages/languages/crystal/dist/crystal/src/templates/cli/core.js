"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliTemplate = cliTemplate;
function cliTemplate() {
    return [
        "require \"option_parser\"",
        "require \"yaml\"",
        "require \"log\"",
        "OptionParser.parse do |p|",
        "  p.on(\"-n NAME\", \"name\") { |v| Log.info { v } }",
        "end",
        "cfg = YAML.parse(File.read(\"config.yml\"))",
        "Log.info { cfg }"
    ].join("\n");
}
