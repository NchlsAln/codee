"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "(require '[clojure.java.shell :refer [sh]])",
        "(println (:out (sh \"./native_tool\" \"ping\")))"
    ].join("\n");
}
