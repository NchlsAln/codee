export function xmlTemplate(): string {
  return [
    "require 'nokogiri'",
    "builder = Nokogiri::XML::Builder.new do |xml|",
    "  xml.user { xml.name 'Ada' }",
    "end",
    "puts builder.to_xml"
  ].join("\n");
}
