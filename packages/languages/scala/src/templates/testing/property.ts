export function propertyTemplate(): string {
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
