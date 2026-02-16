export function propertyTemplate(): string {
  return [
    "require 'rantly'",
    "require 'rantly/property'",
    "property_of { string }.check do |value|",
    "  raise 'fail' unless value.reverse.reverse == value",
    "end"
  ].join("\n");
}
