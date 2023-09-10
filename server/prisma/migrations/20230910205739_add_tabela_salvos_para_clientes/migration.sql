-- CreateTable
CREATE TABLE "Salvo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliente" TEXT NOT NULL,
    "nome_barbearia" TEXT NOT NULL,
    "endereco_barbearia" TEXT NOT NULL,
    CONSTRAINT "Salvo_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
