-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliente" TEXT NOT NULL,
    "id_barbearia" TEXT NOT NULL,
    "id_corteestilo" TEXT NOT NULL,
    "id_profissional" TEXT NOT NULL,
    "id_datahorario" TEXT NOT NULL,
    CONSTRAINT "Agenda_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_corteestilo_fkey" FOREIGN KEY ("id_corteestilo") REFERENCES "CortesEstilos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "Profissional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_datahorario_fkey" FOREIGN KEY ("id_datahorario") REFERENCES "HorarioDisponivel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Agenda" ("id", "id_barbearia", "id_cliente", "id_corteestilo", "id_datahorario", "id_profissional") SELECT "id", "id_barbearia", "id_cliente", "id_corteestilo", "id_datahorario", "id_profissional" FROM "Agenda";
DROP TABLE "Agenda";
ALTER TABLE "new_Agenda" RENAME TO "Agenda";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
