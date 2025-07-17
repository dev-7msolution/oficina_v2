import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const pecas = await prisma.peca.findMany({
      orderBy: {
        nome: "asc",
      },
    });

    return NextResponse.json({ pecas });
  } catch (error) {
    console.error("Erro ao buscar peças:", error);
    return NextResponse.json(
      { error: "Erro ao buscar peças" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { nome, descricao, valorUnitario, quantidadeMinima } = await request.json();

    if (!nome || !valorUnitario) {
      return NextResponse.json(
        { error: "Nome e valor unitário são obrigatórios" },
        { status: 400 }
      );
    }

    const peca = await prisma.peca.create({
      data: {
        nome,
        descricao,
        valorUnitario,
        quantidadeMinima: quantidadeMinima || 0,
      },
    });

    return NextResponse.json(peca);
  } catch (error) {
    console.error("Erro ao criar peça:", error);
    return NextResponse.json(
      { error: "Erro ao criar peça" },
      { status: 500 }
    );
  }
} 