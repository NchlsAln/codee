"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllersTemplate = controllersTemplate;
function controllersTemplate() {
    return "import org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(\"/api\")\npublic class HealthController {\n  @GetMapping(\"/health\")\n  public String health() {\n    return \"ok\";\n  }\n}\n";
}
