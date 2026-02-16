"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return "import java.util.Arrays;\n\npublic class StringsSample {\n  public static void main(String[] args) {\n    String raw = \"  Ada Lovelace  \";\n    String trimmed = raw.trim();\n    String slug = trimmed.toLowerCase().replace(\" \", \"-\");\n    String title = Arrays.stream(slug.split(\"-\"))\n      .map(part -> part.substring(0, 1).toUpperCase() + part.substring(1))\n      .reduce((a, b) -> a + \" \" + b)\n      .orElse(\"\");\n\n    System.out.println(slug);\n    System.out.println(title);\n  }\n}\n";
}
