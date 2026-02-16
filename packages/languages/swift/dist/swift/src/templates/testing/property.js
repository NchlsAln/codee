"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "import SwiftCheck",
        "",
        "property(\"reverse is involutive\") <- forAll { (xs: [Int]) in",
        "  return xs.reversed().reversed() == xs",
        "}"
    ].join("\n");
}
