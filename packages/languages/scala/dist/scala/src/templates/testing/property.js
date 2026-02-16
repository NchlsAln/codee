"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "import org.scalacheck.Properties",
        "import org.scalacheck.Prop.forAll",
        "",
        "object ReverseSpec extends Properties(\"reverse\") {",
        "  property(\"involutive\") = forAll { (xs: List[Int]) =>",
        "    xs.reverse.reverse == xs",
        "  }",
        "}"
    ].join("\n");
}
