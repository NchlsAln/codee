"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bioinformaticsTemplate = bioinformaticsTemplate;
function bioinformaticsTemplate() {
    return [
        "SELECT sample_id, gene, expression",
        "FROM gene_expression",
        "WHERE gene IN ('BRCA1', 'TP53');"
    ].join("\n");
}
