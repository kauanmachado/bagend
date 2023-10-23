/*
  Warnings:

  - Added the required column `horario` to the `HorarioDisponivel` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HorarioDisponivel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_barbearia" TEXT NOT NULL,
    "dataHorario" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    CONSTRAINT "HorarioDisponivel_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HorarioDisponivel" ("dataHorario", "id", "id_barbearia") SELECT "dataHorario", "id", "id_barbearia" FROM "HorarioDisponivel";
DROP TABLE "HorarioDisponivel";
ALTER TABLE "new_HorarioDisponivel" RENAME TO "HorarioDisponivel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
