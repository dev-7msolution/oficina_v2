import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const veiculos = await prisma.veiculo.findMany({
      where: {
        clienteId: parseInt(params.id),
      },
      include: {
        modelo: {
          include: {
            marca: true,
          },
        },
      },
      orderBy: {
        placa: "asc",
      },
    });

    return NextResponse.json({ veiculos });
  } catch (error) {
    console.error("Erro ao buscar veículos do cliente:", error);
    return NextResponse.json(
      { error: "Erro ao buscar veículos do cliente" },
      { status: 500 }
    );
  }
} 