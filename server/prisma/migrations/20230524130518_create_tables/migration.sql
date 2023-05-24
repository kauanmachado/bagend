-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_completo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Barbearia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_barbearia" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "foto_perfil" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "link_instagram" TEXT NOT NULL,
    "link_facebook" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliente" TEXT NOT NULL,
    "id_barbearia" TEXT NOT NULL,
    "corte" TEXT NOT NULL,
    "data_horario" DATETIME NOT NULL,
    CONSTRAINT "Agenda_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CortesEstilos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_barbearia" TEXT NOT NULL,
    "nome_corte" TEXT NOT NULL,
    "tempo_estimado" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    CONSTRAINT "CortesEstilos_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Barbearia_email_key" ON "Barbearia"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Barbearia_cnpj_key" ON "Barbearia"("cnpj");
