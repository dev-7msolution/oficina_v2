import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface ModeloVeiculoResponse {
  id: number;
  nome: string;
  marca: {
    nome: string;
  };
  anoInicio: number | null;
  anoFim: number | null;
}

export async function GET() {
  try {
    const modelos = await prisma.modeloVeiculo.findMany({
      include: {
        marca: true,
      },
      orderBy: [
        {
          marca: {
            nome: 'asc',
          },
        },
        {
          nome: 'asc',
        },
        {
          anoInicio: 'desc',
        },
      ],
    });

    console.log("Modelos encontrados:", modelos); // Debug log

    return NextResponse.json({
      data: modelos.map((modelo): ModeloVeiculoResponse => ({
        id: modelo.id,
        nome: modelo.nome,
        marca: {
          nome: modelo.marca.nome,
        },
        anoInicio: modelo.anoInicio,
        anoFim: modelo.anoFim,
      })),
    });
  } catch (error) {
    console.error("Erro ao buscar modelos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar modelos", data: [] },
      { status: 500 }
    );
  }
} 