"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luckyTemplate = luckyTemplate;
function luckyTemplate() {
    return [
        "class Health::Index < Lucky::Action",
        "  get \"/health\" do",
        "    plain_text \"ok\"",
        "  end",
        "end"
    ].join("\n");
}
