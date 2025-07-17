import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { nome, descricao, valorUnitario, quantidadeMinima } = await request.json();
    const pecaId = parseInt(params.id);

    if (!nome || !valorUnitario) {
      return NextResponse.json(
        { error: "Nome e valor unitário são obrigatórios" },
        { status: 400 }
      );
    }

    const peca = await prisma.peca.update({
      where: { id: pecaId },
      data: {
        nome,
        descricao,
        valorUnitario,
        quantidadeMinima: quantidadeMinima || 0,
      },
    });

    return NextResponse.json(peca);
  } catch (error) {
    console.error("Erro ao atualizar peça:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar peça" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pecaId = parseInt(params.id);

    await prisma.peca.delete({
      where: { id: pecaId },
    });

    return NextResponse.json({ message: "Peça excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir peça:", error);
    return NextResponse.json(
      { error: "Erro ao excluir peça" },
      { status: 500 }
    );
  }
} 