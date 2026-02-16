"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "import qualified Data.Map as Map",
        "nums = [1,2,3]",
        "doubled = map (*2) nums",
        "m = Map.fromList [(1, \"one\")]",
        "main = print doubled"
    ].join("\n");
}
