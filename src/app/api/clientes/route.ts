import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const [clientes, total] = await Promise.all([
      prisma.cliente.findMany({
        include: {
          veiculos: {
            include: {
              modelo: {
                include: {
                  marca: true,
                },
              },
            },
          },
        },
        orderBy: {
          nome: 'asc',
        },
        skip,
        take: limit,
      }),
      prisma.cliente.count(),
    ]);

    return NextResponse.json({
      data: clientes,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return NextResponse.json(
      {
        error: "Erro ao buscar clientes",
        data: [],
        pagination: {
          total: 0,
          pages: 0,
          page: 1,
          limit: 10,
        },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log("POST request received");
    const data = await request.json();
    const { cpf, nome, endereco, veiculo } = data;

    // Validações básicas
    if (!cpf || !nome || !endereco) {
      return NextResponse.json(
        { error: "CPF, nome e endereço são obrigatórios" },
        { status: 400 }
      );
    }

    if (veiculo && (!veiculo.placa || !veiculo.modeloId || !veiculo.ano || !veiculo.cor)) {
      return NextResponse.json(
        { error: "Todos os campos do veículo são obrigatórios se o veículo for fornecido" },
        { status: 400 }
      );
    }

    console.log(cpf);
    console.log(Object.keys(prisma));
    // Verificar se o CPF já existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { cpf },
    });

    if (clienteExistente) {
      return NextResponse.json(
        { error: "CPF já cadastrado" },
        { status: 400 }
      );
    }

    if (veiculo) {
      // Verificar se a placa já existe
      const veiculoExistente = await prisma.veiculo.findUnique({
        where: { placa: veiculo.placa },
      });

      if (veiculoExistente) {
        return NextResponse.json(
          { error: "Placa já cadastrada" },
          { status: 400 }
        );
      }

      // Verificar se o modelo existe
      const modeloExistente = await prisma.modeloVeiculo.findUnique({
        where: { id: parseInt(veiculo.modeloId) },
      });

      if (!modeloExistente) {
        return NextResponse.json(
          { error: "Modelo de veículo não encontrado" },
          { status: 400 }
        );
      }
    }

    const cliente = await prisma.cliente.create({
      data: {
        cpf,
        nome,
        endereco,
        ...(veiculo && {
          veiculos: {
            create: {
              placa: veiculo.placa,
              modeloId: parseInt(veiculo.modeloId),
              ano: parseInt(veiculo.ano),
              cor: veiculo.cor,
            },
          },
        }),
      },
      include: {
        veiculos: {
          include: {
            modelo: {
              include: {
                marca: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(cliente);
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    return NextResponse.json(
      { error: "Erro ao criar cliente", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, cpf, nome, endereco, veiculo } = data;

    // Validações básicas
    if (!id || !cpf || !nome || !endereco || !veiculo) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    if (!veiculo.placa || !veiculo.modeloId || !veiculo.ano || !veiculo.cor) {
      return NextResponse.json(
        { error: "Todos os campos do veículo são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar se o cliente existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { id: parseInt(id) },
      include: { veiculos: true },
    });

    if (!clienteExistente) {
      return NextResponse.json(
        { error: "Cliente não encontrado" },
        { status: 404 }
      );
    }

    // Verificar se o CPF já existe em outro cliente
    if (cpf !== clienteExistente.cpf) {
      const cpfExistente = await prisma.cliente.findUnique({
        where: { cpf },
      });

      if (cpfExistente) {
        return NextResponse.json(
          { error: "CPF já cadastrado" },
          { status: 400 }
        );
      }
    }

    // Verificar se a placa já existe em outro veículo
    if (veiculo.placa !== clienteExistente.veiculos[0]?.placa) {
      const placaExistente = await prisma.veiculo.findUnique({
        where: { placa: veiculo.placa },
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
      where: { id: parseInt(veiculo.modeloId) },
    });

    if (!modeloExistente) {
      return NextResponse.json(
        { error: "Modelo de veículo não encontrado" },
        { status: 400 }
      );
    }

    // Atualizar o cliente e seu veículo
    const cliente = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: {
        cpf,
        nome,
        endereco,
        veiculos: {
          update: {
            where: { id: clienteExistente.veiculos[0].id },
            data: {
              placa: veiculo.placa,
              modeloId: parseInt(veiculo.modeloId),
              ano: parseInt(veiculo.ano),
              cor: veiculo.cor,
            },
          },
        },
      },
      include: {
        veiculos: {
          include: {
            modelo: {
              include: {
                marca: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(cliente);
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar cliente", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
} 