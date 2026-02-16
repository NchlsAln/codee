"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "require 'rantly'",
        "require 'rantly/property'",
        "property_of { string }.check do |value|",
        "  raise 'fail' unless value.reverse.reverse == value",
        "end"
    ].join("\n");
}
