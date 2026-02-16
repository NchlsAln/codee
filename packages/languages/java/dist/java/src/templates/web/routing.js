"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return "import org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class ItemController {\n  @GetMapping(\"/items/{id}\")\n  public String getItem(@PathVariable String id) {\n    return id;\n  }\n}\n";
}
