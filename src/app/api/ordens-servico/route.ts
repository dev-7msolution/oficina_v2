import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/ordens-servico
export async function GET(request: Request) {
  try {
    console.log(Object.keys(prisma));
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const statusFilter = status === "TODOS" ? "" : status;

    const searchConditions: any[] = [
      { veiculo: { placa: { contains: search, mode: "insensitive" } } },
      { veiculo: { cliente: { nome: { contains: search, mode: "insensitive" } } } },
    ];

    if (!isNaN(parseInt(search))) {
      searchConditions.push({ id: parseInt(search) });
    }

    const where: any = {
      AND: [],
    };

    if (statusFilter) {
      where.AND.push({ status: statusFilter });
    }

    if (search) {
      where.AND.push({ OR: searchConditions });
    }

    const skip = (page - 1) * limit;
    const [ordensServico, total] = await Promise.all([
      prisma.ordemServico.findMany({
        skip,
        take: limit,
        where,
        include: {
          veiculo: {
            include: {
              cliente: true,
              modelo: {
                include: {
                  marca: true,
                },
              },
            },
          },
          itensServico: {
            include: {
              tipoServico: true,
            },
          },
          itensPeca: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.ordemServico.count({
        where,
      }),
    ]);

    return NextResponse.json({
      ordensServico,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Erro ao buscar ordens de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao buscar ordens de serviço" },
      { status: 500 }
    );
  }
}

// POST /api/ordens-servico
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      veiculoId,
      observacoes,
      tipoPagamento,
      itensServico,
      itensPeca,
    } = data;

    if (!veiculoId) {
      return NextResponse.json(
        { error: "Veículo é obrigatório" },
        { status: 400 }
      );
    }

    // Calcular valor total
    const valorTotalServicos = itensServico.reduce(
      (total: number, item: any) => total + item.valorTotal,
      0
    );
    const valorTotalPecas = itensPeca.reduce(
      (total: number, item: any) => total + item.valorTotal,
      0
    );
    const valorTotal = valorTotalServicos + valorTotalPecas;

    const ordemServico = await prisma.ordemServico.create({
      data: {
        veiculoId,
        observacoes,
        tipoPagamento,
        valorTotal,
        itensServico: {
          create: itensServico.map((item: any) => ({
            tipoServicoId: item.tipoServicoId,
            quantidade: item.quantidade,
            valorUnitario: item.valorUnitario,
            valorTotal: item.valorTotal,
          })),
        },
        itensPeca: {
          create: itensPeca.map((item: any) => ({
            nome: item.nome,
            quantidade: item.quantidade,
            valorUnitario: item.valorUnitario,
            valorTotal: item.valorTotal,
          })),
        },
      },
      include: {
        veiculo: {
          include: {
            cliente: true,
            modelo: {
              include: {
                marca: true,
              },
            },
          },
        },
        itensServico: {
          include: {
            tipoServico: true,
          },
        },
        itensPeca: true,
      },
    });

    return NextResponse.json(ordemServico);
  } catch (error) {
    console.error("Erro ao criar ordem de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao criar ordem de serviço" },
      { status: 500 }
    );
  }
}

// PUT /api/ordens-servico
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const {
      id,
      status,
      tipoPagamento,
      observacoes,
      itensServico,
      itensPeca,
    } = data;

    if (!id) {
      return NextResponse.json(
        { error: "ID é obrigatório" },
        { status: 400 }
      );
    }

    // Calcular valor total
    const valorTotalServicos = itensServico.reduce(
      (total: number, item: any) => total + item.valorTotal,
      0
    );
    const valorTotalPecas = itensPeca.reduce(
      (total: number, item: any) => total + item.valorTotal,
      0
    );
    const valorTotal = valorTotalServicos + valorTotalPecas;

    // Primeiro, deletar todos os itens existentes
    await prisma.itemServico.deleteMany({
      where: { ordemServicoId: id },
    });
    await prisma.itemPeca.deleteMany({
      where: { ordemServicoId: id },
    });

    const ordemServico = await prisma.ordemServico.update({
      where: { id },
      data: {
        status,
        tipoPagamento,
        observacoes,
        valorTotal,
        itensServico: {
          create: itensServico.map((item: any) => ({
            tipoServicoId: item.tipoServicoId,
            quantidade: item.quantidade,
            valorUnitario: item.valorUnitario,
            valorTotal: item.valorTotal,
          })),
        },
        itensPeca: {
          create: itensPeca.map((item: any) => ({
            nome: item.nome,
            quantidade: item.quantidade,
            valorUnitario: item.valorUnitario,
            valorTotal: item.valorTotal,
          })),
        },
      },
      include: {
        veiculo: {
          include: {
            cliente: true,
            modelo: {
              include: {
                marca: true,
              },
            },
          },
        },
        itensServico: {
          include: {
            tipoServico: true,
          },
        },
        itensPeca: true,
      },
    });

    return NextResponse.json(ordemServico);
  } catch (error) {
    console.error("Erro ao atualizar ordem de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar ordem de serviço" },
      { status: 500 }
    );
  }
}

// DELETE /api/ordens-servico
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

    // Primeiro, deletar todos os itens
    await prisma.itemServico.deleteMany({
      where: { ordemServicoId: parseInt(id) },
    });
    await prisma.itemPeca.deleteMany({
      where: { ordemServicoId: parseInt(id) },
    });

    // Depois, deletar a ordem de serviço
    await prisma.ordemServico.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao deletar ordem de serviço:", error);
    return NextResponse.json(
      { error: "Erro ao deletar ordem de serviço" },
      { status: 500 }
    );
  }
} 