export function ormTemplate(): string {
  return "package main\n\nimport (\n  \"gorm.io/driver/sqlite\"\n  \"gorm.io/gorm\"\n)\n\ntype User struct {\n  ID    uint\n  Email string\n}\n\nfunc main() {\n  db, _ := gorm.Open(sqlite.Open(\"app.db\"), &gorm.Config{})\n  _ = db.AutoMigrate(&User{})\n  _ = db.Create(&User{Email: \"ada@example.com\"}).Error\n}\n";
}
