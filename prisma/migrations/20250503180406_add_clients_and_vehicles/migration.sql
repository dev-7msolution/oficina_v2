/*
  Warnings:

  - You are about to drop the column `anoFim` on the `ModeloVeiculo` table. All the data in the column will be lost.
  - You are about to drop the column `anoInicio` on the `ModeloVeiculo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ModeloVeiculo_nome_marcaId_anoInicio_anoFim_key";

-- AlterTable
ALTER TABLE "ModeloVeiculo" DROP COLUMN "anoFim",
DROP COLUMN "anoInicio";

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "id" SERIAL NOT NULL,
    "placa" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "modeloId" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_placa_key" ON "Veiculo"("placa");

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "ModeloVeiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
