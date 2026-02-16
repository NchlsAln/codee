"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "import express from 'express';",
        "",
        "const router = express.Router();",
        "",
        "router.get('/items/:id', (req, res) => {",
        "  res.json({ id: Number(req.params.id) });",
        "});",
        "",
        "export default router;"
    ].join("\n");
}
