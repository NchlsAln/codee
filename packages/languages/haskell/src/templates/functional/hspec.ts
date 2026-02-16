export function hspecTemplate(): string {
  return [
    "import Test.Hspec",
    "main = hspec $ describe \"math\" $",
    "  it \"adds\" $ 2 + 2 `shouldBe` 4"
  ].join("\n");
}
