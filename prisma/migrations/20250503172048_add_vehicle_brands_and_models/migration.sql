-- CreateTable
CREATE TABLE "MarcaVeiculo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarcaVeiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModeloVeiculo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "marcaId" INTEGER NOT NULL,
    "anoInicio" INTEGER,
    "anoFim" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModeloVeiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MarcaVeiculo_nome_key" ON "MarcaVeiculo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ModeloVeiculo_nome_marcaId_anoInicio_anoFim_key" ON "ModeloVeiculo"("nome", "marcaId", "anoInicio", "anoFim");

-- AddForeignKey
ALTER TABLE "ModeloVeiculo" ADD CONSTRAINT "ModeloVeiculo_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "MarcaVeiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
