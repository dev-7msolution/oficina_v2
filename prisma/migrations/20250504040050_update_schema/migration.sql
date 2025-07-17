-- CreateTable
CREATE TABLE "OrdemServico" (
    "id" SERIAL NOT NULL,
    "veiculoId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ABERTO',
    "tipoPagamento" TEXT,
    "observacoes" TEXT,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrdemServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemServico" (
    "id" SERIAL NOT NULL,
    "ordemServicoId" INTEGER NOT NULL,
    "tipoServicoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPeca" (
    "id" SERIAL NOT NULL,
    "ordemServicoId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemPeca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemServico" ADD CONSTRAINT "ItemServico_ordemServicoId_fkey" FOREIGN KEY ("ordemServicoId") REFERENCES "OrdemServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemServico" ADD CONSTRAINT "ItemServico_tipoServicoId_fkey" FOREIGN KEY ("tipoServicoId") REFERENCES "TipoServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPeca" ADD CONSTRAINT "ItemPeca_ordemServicoId_fkey" FOREIGN KEY ("ordemServicoId") REFERENCES "OrdemServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
