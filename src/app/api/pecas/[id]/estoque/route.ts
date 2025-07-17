import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { quantidade, tipo } = await request.json();
    const pecaId = parseInt(params.id);

    if (!quantidade || !tipo) {
      return NextResponse.json(
        { error: "Quantidade e tipo são obrigatórios" },
        { status: 400 }
      );
    }

    const peca = await prisma.peca.findUnique({
      where: { id: pecaId },
    });

    if (!peca) {
      return NextResponse.json(
        { error: "Peça não encontrada" },
        { status: 404 }
      );
    }

    let novaQuantidade = peca.quantidadeEstoque;

    if (tipo === "ENTRADA") {
      novaQuantidade += quantidade;
    } else if (tipo === "SAIDA") {
      novaQuantidade -= quantidade;
      if (novaQuantidade < 0) {
        return NextResponse.json(
          { error: "Quantidade insuficiente em estoque" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Tipo de operação inválido" },
        { status: 400 }
      );
    }

    const pecaAtualizada = await prisma.peca.update({
      where: { id: pecaId },
      data: {
        quantidadeEstoque: novaQuantidade,
      },
    });

    return NextResponse.json(pecaAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar estoque:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar estoque" },
      { status: 500 }
    );
  }
} 