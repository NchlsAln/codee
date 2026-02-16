"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "nums <- c(1, 2, 3)",
        "names <- list(first = \"Ada\", last = \"Lovelace\")",
        "df <- data.frame(id = 1:3, value = nums)",
        "print(mean(df$value))"
    ].join("\n");
}
