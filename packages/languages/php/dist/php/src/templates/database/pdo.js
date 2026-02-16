"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdoQueryTemplate = pdoQueryTemplate;
function pdoQueryTemplate() {
    return [
        "$pdo = new PDO('mysql:host=localhost;dbname=app', 'user', 'pass');",
        "$stmt = $pdo->prepare('SELECT id, name FROM users WHERE id = :id');",
        "$stmt->execute(['id' => 1]);",
        "$row = $stmt->fetch(PDO::FETCH_ASSOC);",
        "print_r($row);"
    ].join("\n");
}
