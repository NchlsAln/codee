"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conduitTemplate = conduitTemplate;
function conduitTemplate() {
    return [
        "import Conduit",
        "main = runConduit $ yieldMany [1..5] .| mapC (*2) .| sinkList >>= print"
    ].join("\n");
}
