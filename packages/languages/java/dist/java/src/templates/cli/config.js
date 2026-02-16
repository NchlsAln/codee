"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return "import java.util.Properties;\n\npublic class ConfigSample {\n  public static void main(String[] args) throws Exception {\n    Properties props = new Properties();\n    props.load(ConfigSample.class.getResourceAsStream(\"/app.properties\"));\n    System.out.println(props.getProperty(\"server.host\"));\n  }\n}\n";
}
