export function conduitTemplate(): string {
  return [
    "import Conduit",
    "main = runConduit $ yieldMany [1..5] .| mapC (*2) .| sinkList >>= print"
  ].join("\n");
}
