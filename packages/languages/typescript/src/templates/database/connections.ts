export function connectionsTemplate(): string {
  return [
    "import mysql from 'mysql2/promise';",
    "",
    "const pool = mysql.createPool({ host: 'localhost', user: 'root', database: 'app' });",
    "const [rows] = await pool.query('SELECT 1 as ok');",
    "",
    "console.log(rows);",
    "await pool.end();"
  ].join("\n");
}
