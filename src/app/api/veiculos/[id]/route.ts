import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const { placa, modeloId, ano, cor } = data;

    // Validações básicas
    if (!placa || !modeloId || !ano || !cor) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar se o veículo existe
    const veiculoExistente = await prisma.veiculo.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!veiculoExistente) {
      return NextResponse.json(
        { error: "Veículo não encontrado" },
        { status: 404 }
      );
    }

    // Verificar se a placa já existe em outro veículo
    if (placa !== veiculoExistente.placa) {
      const placaExistente = await prisma.veiculo.findUnique({
        where: { placa },
      });

      if (placaExistente) {
        return NextResponse.json(
          { error: "Placa já cadastrada" },
          { status: 400 }
        );
      }
    }

    // Verificar se o modelo existe
    const modeloExistente = await prisma.modeloVeiculo.findUnique({
      where: { id: parseInt(modeloId) },
    });

    if (!modeloExistente) {
      return NextResponse.json(
        { error: "Modelo de veículo não encontrado" },
        { status: 400 }
      );
    }

    // Atualizar o veículo
    const veiculo = await prisma.veiculo.update({
      where: { id: parseInt(params.id) },
      data: {
        placa,
        modeloId: parseInt(modeloId),
        ano: parseInt(ano),
        cor,
      },
      include: {
        modelo: {
          include: {
            marca: true,
          },
        },
      },
    });

    return NextResponse.json(veiculo);
  } catch (error) {
    console.error("Erro ao atualizar veículo:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar veículo", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Verificar se o veículo existe
    const veiculoExistente = await prisma.veiculo.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!veiculoExistente) {
      return NextResponse.json(
        { error: "Veículo não encontrado" },
        { status: 404 }
      );
    }

    // Excluir o veículo
    await prisma.veiculo.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao excluir veículo:", error);
    return NextResponse.json(
      { error: "Erro ao excluir veículo", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
} 