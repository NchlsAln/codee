"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "import Foundation",
        "",
        "let data = try NSKeyedArchiver.archivedData(withRootObject: [1, 2, 3], requiringSecureCoding: false)",
        "let list = try NSKeyedUnarchiver.unarchiveTopLevelObjectWithData(data) as? [Int]",
        "print(list?.count ?? 0)"
    ].join("\n");
}
