"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return "import org.springframework.web.client.RestTemplate;\n\nimport java.util.Map;\n\npublic class RestSample {\n  public static void main(String[] args) {\n    RestTemplate client = new RestTemplate();\n    Map<?, ?> response = client.postForObject(\"https://example.com/items\", Map.of(\"name\", \"widget\"), Map.class);\n    System.out.println(response);\n  }\n}\n";
}
