import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/gerencial/tipos-servico
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    const [tiposServico, total] = await Promise.all([
      prisma.tipoServico.findMany({
        skip,
        take: limit,
        where: {
          OR: [
            { nome: { contains: search, mode: "insensitive" } },
            { descricao: { contains: search, mode: "insensitive" } },
          ],
        },
        orderBy: { nome: "asc" },
      }),
      prisma.tipoServico.count({
        where: {
          OR: [
            { nome: { contains: search, mode: "insensitive" } },
            { descricao: { contains: search, mode: "insensitive" } },
          ],
        },
      }),
    ]);

    return NextResponse.json({
      tiposServico,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Erro ao buscar tipos de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao buscar tipos de serviço" },
      { status: 500 }
    );
  }
}

// POST /api/gerencial/tipos-servico
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nome, descricao, valor, tempoMedio } = data;

    if (!nome || !valor) {
      return NextResponse.json(
        { error: "Nome e valor são obrigatórios" },
        { status: 400 }
      );
    }

    const tipoServico = await prisma.tipoServico.create({
      data: {
        nome,
        descricao,
        valor: parseFloat(valor),
        tempoMedio: tempoMedio ? parseInt(tempoMedio) : null,
      },
    });

    return NextResponse.json(tipoServico);
  } catch (error) {
    console.error("Erro ao criar tipo de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao criar tipo de serviço" },
      { status: 500 }
    );
  }
}

// PUT /api/gerencial/tipos-servico
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, nome, descricao, valor, tempoMedio, ativo } = data;

    if (!id || !nome || !valor) {
      return NextResponse.json(
        { error: "ID, nome e valor são obrigatórios" },
        { status: 400 }
      );
    }

    const tipoServico = await prisma.tipoServico.update({
      where: { id },
      data: {
        nome,
        descricao,
        valor: parseFloat(valor),
        tempoMedio: tempoMedio ? parseInt(tempoMedio) : null,
        ativo,
      },
    });

    return NextResponse.json(tipoServico);
  } catch (error) {
    console.error("Erro ao atualizar tipo de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar tipo de serviço" },
      { status: 500 }
    );
  }
}

// DELETE /api/gerencial/tipos-servico
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID é obrigatório" },
        { status: 400 }
      );
    }

    await prisma.tipoServico.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao deletar tipo de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao deletar tipo de serviço" },
      { status: 500 }
    );
  }
} 