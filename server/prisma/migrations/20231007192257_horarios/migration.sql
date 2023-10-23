-- CreateTable
CREATE TABLE "HorarioDisponivel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_barbearia" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    CONSTRAINT "HorarioDisponivel_id_barbearia_fkey" FOREIGN KEY ("id_barbearia") REFERENCES "Barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
