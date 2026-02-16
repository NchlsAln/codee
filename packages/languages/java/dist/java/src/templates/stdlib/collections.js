"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return "import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\npublic class CollectionsSample {\n  public static void main(String[] args) {\n    List<String> names = new ArrayList<>(List.of(\"Ada\", \"Linus\", \"Grace\"));\n    Map<String, Integer> scores = new HashMap<>();\n    scores.put(\"Ada\", 10);\n    scores.put(\"Linus\", 8);\n\n    List<String> top = names.stream()\n      .filter(name -> scores.containsKey(name))\n      .map(String::toUpperCase)\n      .collect(Collectors.toList());\n\n    System.out.println(top);\n  }\n}\n";
}
