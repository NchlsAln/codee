export function migrationsTemplate(): string {
  return [
    "(require '[migratus.core :as migratus])",
    "(def config {:store :database :db {:dbtype \"postgres\" :dbname \"app\"}})",
    "(migratus/migrate config)"
  ].join("\n");
}
