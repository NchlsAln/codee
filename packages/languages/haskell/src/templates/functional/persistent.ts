export function persistentTemplate(): string {
  return [
    "share [mkPersist sqlSettings, mkMigrate \"migrateAll\"] [persistLowerCase|",
    "User",
    "  name String",
    "  deriving Show",
    "|]"
  ].join("\n");
}
