/*
  Warnings:

  - You are about to drop the column `endereco_barbearia` on the `Salvo` table. All the data in the column will be lost.
  - You are about to drop the column `nome_barbearia` on the `Salvo` table. All the data in the column will be lost.
  - Added the required column `id_barbearia` to the `Salvo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Salvo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliente" TEXT NOT NULL,
    "id_barbearia" TEXT NOT NULL,
    CONSTRAINT "Salvo_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Salvo_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Salvo" ("id", "id_cliente") SELECT "id", "id_cliente" FROM "Salvo";
DROP TABLE "Salvo";
ALTER TABLE "new_Salvo" RENAME TO "Salvo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
