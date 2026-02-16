"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return [
        "require 'nokogiri'",
        "builder = Nokogiri::XML::Builder.new do |xml|",
        "  xml.user { xml.name 'Ada' }",
        "end",
        "puts builder.to_xml"
    ].join("\n");
}
