"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
    return [
        "use proptest::prelude::*;",
        "",
        "proptest! {",
        "    #[test]",
        "    fn addition_commutes(a in 0i32..1000, b in 0i32..1000) {",
        "        prop_assert_eq!(a + b, b + a);",
        "    }",
        "}"
    ].join("\n");
}
