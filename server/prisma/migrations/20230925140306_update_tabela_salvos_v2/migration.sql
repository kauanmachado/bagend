/*
  Warnings:

  - You are about to alter the column `data` on the `Salvo` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Salvo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliente" TEXT NOT NULL,
    "id_barbearia" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    CONSTRAINT "Salvo_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Salvo_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Salvo" ("data", "id", "id_barbearia", "id_cliente") SELECT "data", "id", "id_barbearia", "id_cliente" FROM "Salvo";
DROP TABLE "Salvo";
ALTER TABLE "new_Salvo" RENAME TO "Salvo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
