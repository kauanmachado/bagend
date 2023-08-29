/*
  Warnings:

  - You are about to drop the column `link_facebook` on the `Barbearia` table. All the data in the column will be lost.

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
    "link_instagram" TEXT NOT NULL
);
INSERT INTO "new_Barbearia" ("cnpj", "email", "endereco", "foto_perfil", "id", "lat", "link_instagram", "lng", "nome_barbearia", "senha", "telefone") SELECT "cnpj", "email", "endereco", "foto_perfil", "id", "lat", "link_instagram", "lng", "nome_barbearia", "senha", "telefone" FROM "Barbearia";
DROP TABLE "Barbearia";
ALTER TABLE "new_Barbearia" RENAME TO "Barbearia";
CREATE UNIQUE INDEX "Barbearia_email_key" ON "Barbearia"("email");
CREATE UNIQUE INDEX "Barbearia_cnpj_key" ON "Barbearia"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
