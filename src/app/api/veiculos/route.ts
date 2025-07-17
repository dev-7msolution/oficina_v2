import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { clienteId, placa, modeloId, ano, cor } = data;

    // Validações básicas
    if (!clienteId || !placa || !modeloId || !ano || !cor) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar se o cliente existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id: parseInt(clienteId) },
    });

    if (!clienteExistente) {
      return NextResponse.json(
        { error: "Cliente não encontrado" },
        { status: 404 }
      );
    }

    // Verificar se a placa já existe
    const placaExistente = await prisma.veiculo.findUnique({
      where: { placa },
    });

    if (placaExistente) {
      return NextResponse.json(
        { error: "Placa já cadastrada" },
        { status: 400 }
      );
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

    // Criar o veículo
    const veiculo = await prisma.veiculo.create({
      data: {
        placa,
        clienteId: parseInt(clienteId),
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
    console.error("Erro ao criar veículo:", error);
    return NextResponse.json(
      { error: "Erro ao criar veículo", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
} 