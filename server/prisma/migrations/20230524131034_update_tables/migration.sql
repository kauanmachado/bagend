/*
  Warnings:

  - Added the required column `lat` to the `Barbearia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Barbearia` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Barbearia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_barbearia" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,
    "foto_perfil" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "link_instagram" TEXT NOT NULL,
    "link_facebook" TEXT NOT NULL
);
INSERT INTO "new_Barbearia" ("cnpj", "email", "endereco", "foto_perfil", "id", "link_facebook", "link_instagram", "nome_barbearia", "senha", "telefone") SELECT "cnpj", "email", "endereco", "foto_perfil", "id", "link_facebook", "link_instagram", "nome_barbearia", "senha", "telefone" FROM "Barbearia";
DROP TABLE "Barbearia";
ALTER TABLE "new_Barbearia" RENAME TO "Barbearia";
CREATE UNIQUE INDEX "Barbearia_email_key" ON "Barbearia"("email");
CREATE UNIQUE INDEX "Barbearia_cnpj_key" ON "Barbearia"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
