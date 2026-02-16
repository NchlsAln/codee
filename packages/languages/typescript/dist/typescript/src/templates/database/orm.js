"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return [
        "import { PrismaClient } from '@prisma/client';",
        "",
        "const prisma = new PrismaClient();",
        "",
        "const user = await prisma.user.create({",
        "  data: { email: 'ada@example.com' }",
        "});",
        "",
        "console.log(user.id);"
    ].join("\n");
}
