"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.structureTemplate = structureTemplate;
function structureTemplate() {
    return [
        "$layout-gap: 1.5rem;",
        ".layout { display: grid; gap: $layout-gap; }"
    ].join("\n");
}
