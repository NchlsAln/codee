"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.karaxTemplate = karaxTemplate;
function karaxTemplate() {
    return [
        "import karax/[karax, vdom]",
        "proc view(): VNode =",
        "  buildHtml(tdiv):",
        "    text \"hello\"",
        "setRenderer(view)"
    ].join("\n");
}
