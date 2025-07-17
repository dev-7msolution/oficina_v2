import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Marcas de veículos
  const marcas = [
    { nome: 'Volkswagen' },
    { nome: 'Fiat' },
    { nome: 'Chevrolet' },
    { nome: 'Ford' },
    { nome: 'Toyota' },
    { nome: 'Honda' },
    { nome: 'Hyundai' },
    { nome: 'Renault' },
    { nome: 'Jeep' },
    { nome: 'Nissan' },
  ];

  // Modelos por marca
  const modelos = {
    Volkswagen: [
      { nome: 'Gol', anoInicio: 1980, anoFim: null },
      { nome: 'Polo', anoInicio: 2002, anoFim: null },
      { nome: 'Virtus', anoInicio: 2017, anoFim: null },
      { nome: 'T-Cross', anoInicio: 2019, anoFim: null },
      { nome: 'Nivus', anoInicio: 2020, anoFim: null },
    ],
    Fiat: [
      { nome: 'Uno', anoInicio: 1984, anoFim: null },
      { nome: 'Palio', anoInicio: 1996, anoFim: 2017 },
      { nome: 'Strada', anoInicio: 1996, anoFim: null },
      { nome: 'Toro', anoInicio: 2016, anoFim: null },
      { nome: 'Mobi', anoInicio: 2016, anoFim: null },
    ],
    Chevrolet: [
      { nome: 'Onix', anoInicio: 2012, anoFim: null },
      { nome: 'Prisma', anoInicio: 2012, anoFim: 2019 },
      { nome: 'Cruze', anoInicio: 2011, anoFim: null },
      { nome: 'Tracker', anoInicio: 2013, anoFim: null },
      { nome: 'S10', anoInicio: 1995, anoFim: null },
    ],
    Ford: [
      { nome: 'Ka', anoInicio: 1997, anoFim: null },
      { nome: 'Fiesta', anoInicio: 1996, anoFim: 2019 },
      { nome: 'Focus', anoInicio: 1998, anoFim: 2021 },
      { nome: 'Ranger', anoInicio: 1998, anoFim: null },
      { nome: 'EcoSport', anoInicio: 2003, anoFim: 2022 },
    ],
    Toyota: [
      { nome: 'Corolla', anoInicio: 1992, anoFim: null },
      { nome: 'Hilux', anoInicio: 1968, anoFim: null },
      { nome: 'SW4', anoInicio: 1985, anoFim: null },
      { nome: 'Yaris', anoInicio: 1999, anoFim: null },
      { nome: 'Etios', anoInicio: 2012, anoFim: 2021 },
    ],
    Honda: [
      { nome: 'Civic', anoInicio: 1992, anoFim: null },
      { nome: 'Fit', anoInicio: 2003, anoFim: 2020 },
      { nome: 'HR-V', anoInicio: 2015, anoFim: null },
      { nome: 'WR-V', anoInicio: 2017, anoFim: null },
      { nome: 'City', anoInicio: 1996, anoFim: null },
    ],
    Hyundai: [
      { nome: 'HB20', anoInicio: 2012, anoFim: null },
      { nome: 'Creta', anoInicio: 2015, anoFim: null },
      { nome: 'Tucson', anoInicio: 2004, anoFim: null },
      { nome: 'i30', anoInicio: 2008, anoFim: 2019 },
      { nome: 'Santa Fe', anoInicio: 2001, anoFim: null },
    ],
    Renault: [
      { nome: 'Kwid', anoInicio: 2017, anoFim: null },
      { nome: 'Sandero', anoInicio: 2008, anoFim: null },
      { nome: 'Logan', anoInicio: 2007, anoFim: null },
      { nome: 'Duster', anoInicio: 2011, anoFim: null },
      { nome: 'Captur', anoInicio: 2017, anoFim: null },
    ],
    Jeep: [
      { nome: 'Renegade', anoInicio: 2014, anoFim: null },
      { nome: 'Compass', anoInicio: 2017, anoFim: null },
      { nome: 'Commander', anoInicio: 2021, anoFim: null },
      { nome: 'Wrangler', anoInicio: 2018, anoFim: null },
      { nome: 'Gladiator', anoInicio: 2021, anoFim: null },
    ],
    Nissan: [
      { nome: 'Kicks', anoInicio: 2016, anoFim: null },
      { nome: 'Versa', anoInicio: 2012, anoFim: null },
      { nome: 'March', anoInicio: 2011, anoFim: 2021 },
      { nome: 'Frontier', anoInicio: 1998, anoFim: null },
      { nome: 'Sentra', anoInicio: 2013, anoFim: null },
    ],
  };

  // Inserir marcas
  for (const marca of marcas) {
    const marcaCriada = await prisma.marcaVeiculo.create({
      data: marca,
    });

    // Inserir modelos da marca
    const modelosMarca = modelos[marca.nome as keyof typeof modelos];
    for (const modelo of modelosMarca) {
      await prisma.modeloVeiculo.create({
        data: {
          ...modelo,
          marcaId: marcaCriada.id,
        },
      });
    }
  }

  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 