export function stdlibTemplate(): string {
  return [
    "import qualified Data.Text as T",
    "import qualified Data.Map.Strict as Map",
    "arr = [1,2,3]",
    "upper = T.toUpper (T.pack \"haskell\")",
    "mp = Map.fromList [(\"a\", 1)]",
    "main = do",
    "  writeFile \"data.txt\" \"ok\n\"",
    "  _ <- readFile \"data.txt\"",
    "  print (sqrt 81 :: Double)",
    "  print (length arr + T.length upper + Map.size mp)"
  ].join("\n");
}
