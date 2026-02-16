"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistentTemplate = persistentTemplate;
function persistentTemplate() {
    return [
        "share [mkPersist sqlSettings, mkMigrate \"migrateAll\"] [persistLowerCase|",
        "User",
        "  name String",
        "  deriving Show",
        "|]"
    ].join("\n");
}
