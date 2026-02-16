"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hspecTemplate = hspecTemplate;
function hspecTemplate() {
    return [
        "import Test.Hspec",
        "main = hspec $ describe \"math\" $",
        "  it \"adds\" $ 2 + 2 `shouldBe` 4"
    ].join("\n");
}
