/*
  Warnings:

  - A unique constraint covering the columns `[dataHorario]` on the table `HorarioDisponivel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HorarioDisponivel_dataHorario_key" ON "HorarioDisponivel"("dataHorario");
