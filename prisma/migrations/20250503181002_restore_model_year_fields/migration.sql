/*
  Warnings:

  - A unique constraint covering the columns `[nome,marcaId,anoInicio,anoFim]` on the table `ModeloVeiculo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ModeloVeiculo" ADD COLUMN     "anoFim" INTEGER,
ADD COLUMN     "anoInicio" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "ModeloVeiculo_nome_marcaId_anoInicio_anoFim_key" ON "ModeloVeiculo"("nome", "marcaId", "anoInicio", "anoFim");
