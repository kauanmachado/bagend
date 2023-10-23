/*
  Warnings:

  - You are about to drop the column `data` on the `HorarioDisponivel` table. All the data in the column will be lost.
  - Added the required column `dataHorario` to the `HorarioDisponivel` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HorarioDisponivel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_barbearia" TEXT NOT NULL,
    "dataHorario" TEXT NOT NULL,
    CONSTRAINT "HorarioDisponivel_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HorarioDisponivel" ("id", "id_barbearia") SELECT "id", "id_barbearia" FROM "HorarioDisponivel";
DROP TABLE "HorarioDisponivel";
ALTER TABLE "new_HorarioDisponivel" RENAME TO "HorarioDisponivel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
