-- CreateTable
CREATE TABLE "Peca" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "quantidadeEstoque" INTEGER NOT NULL DEFAULT 0,
    "quantidadeMinima" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Peca_pkey" PRIMARY KEY ("id")
);
