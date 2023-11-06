/*
  Warnings:

  - Added the required column `concluida` to the `Agenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disponivel` to the `HorarioDisponivel` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliente" TEXT NOT NULL,
    "id_barbearia" TEXT NOT NULL,
    "id_corteestilo" TEXT NOT NULL,
    "id_profissional" TEXT NOT NULL,
    "id_datahorario" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL,
    CONSTRAINT "Agenda_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_corteestilo_fkey" FOREIGN KEY ("id_corteestilo") REFERENCES "CortesEstilos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "Profissional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Agenda" ("id", "id_barbearia", "id_cliente", "id_corteestilo", "id_datahorario", "id_profissional") SELECT "id", "id_barbearia", "id_cliente", "id_corteestilo", "id_datahorario", "id_profissional" FROM "Agenda";
DROP TABLE "Agenda";
ALTER TABLE "new_Agenda" RENAME TO "Agenda";
CREATE TABLE "new_HorarioDisponivel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_barbearia" TEXT NOT NULL,
    "dataHorario" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL,
    CONSTRAINT "HorarioDisponivel_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HorarioDisponivel" ("dataHorario", "horario", "id", "id_barbearia") SELECT "dataHorario", "horario", "id", "id_barbearia" FROM "HorarioDisponivel";
DROP TABLE "HorarioDisponivel";
ALTER TABLE "new_HorarioDisponivel" RENAME TO "HorarioDisponivel";
CREATE UNIQUE INDEX "HorarioDisponivel_dataHorario_key" ON "HorarioDisponivel"("dataHorario");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
