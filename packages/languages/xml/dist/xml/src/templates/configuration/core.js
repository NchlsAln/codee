"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationTemplate = configurationTemplate;
function configurationTemplate() {
    return [
        "<config>",
        "  <env>prod</env>",
        "  <feature name=\"beta\">false</feature>",
        "</config>"
    ].join("\n");
}
