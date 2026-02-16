"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylingTemplate = stylingTemplate;
function stylingTemplate() {
    return [
        "<link rel=\"stylesheet\" href=\"styles.css\">",
        "<div class=\"card\">Styled content</div>"
    ].join("\n");
}
