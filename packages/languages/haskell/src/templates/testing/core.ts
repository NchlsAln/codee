export function testingTemplate(): string {
  return [
    "import Test.Hspec",
    "import Test.QuickCheck",
    "import Criterion.Main",
    "main = do",
    "  hspec $ it \"adds\" $ (1 + 2) `shouldBe` (3 :: Int)",
    "  quickCheck (\n -> n == (n :: Int))",
    "  defaultMain [bench \"sum\" $ nf sum ([1..1000] :: [Int])]"
  ].join("\n");
}
