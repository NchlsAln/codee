export function propertyTemplate(): string {
  return [
    "import SwiftCheck",
    "",
    "property(\"reverse is involutive\") <- forAll { (xs: [Int]) in",
    "  return xs.reversed().reversed() == xs",
    "}"
  ].join("\n");
}
