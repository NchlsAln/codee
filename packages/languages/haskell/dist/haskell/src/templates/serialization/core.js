"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializationTemplate = serializationTemplate;
function serializationTemplate() {
    return [
        "import Data.Aeson",
        "import Data.Binary",
        "import Data.MessagePack",
        "main = do",
        "  let json = encode (object [\"ok\" .= True])",
        "  let bin = encode (42 :: Int)",
        "  let packed = pack (\"hi\" :: String)",
        "  print (json, bin, packed)"
    ].join("\n");
}
