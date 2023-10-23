/*
  Warnings:

  - Added the required column `data` to the `Salvo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Salvo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliente" TEXT NOT NULL,
    "id_barbearia" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    CONSTRAINT "Salvo_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Salvo_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Salvo" ("id", "id_barbearia", "id_cliente") SELECT "id", "id_barbearia", "id_cliente" FROM "Salvo";
DROP TABLE "Salvo";
ALTER TABLE "new_Salvo" RENAME TO "Salvo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
