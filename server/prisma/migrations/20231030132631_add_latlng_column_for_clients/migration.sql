/*
  Warnings:

  - You are about to drop the `Avaliacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `data_horario` on the `Agenda` table. All the data in the column will be lost.
  - Added the required column `id_datahorario` to the `Agenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Avaliacao";
PRAGMA foreign_keys=on;

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
    CONSTRAINT "Agenda_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "Profissional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Agenda" ("id", "id_barbearia", "id_cliente", "id_corteestilo", "id_profissional") SELECT "id", "id_barbearia", "id_cliente", "id_corteestilo", "id_profissional" FROM "Agenda";
DROP TABLE "Agenda";
ALTER TABLE "new_Agenda" RENAME TO "Agenda";
CREATE TABLE "new_Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_completo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL
);
INSERT INTO "new_Cliente" ("email", "endereco", "id", "nome_completo", "senha") SELECT "email", "endereco", "id", "nome_completo", "senha" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
