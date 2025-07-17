"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Wrench, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Importação dinâmica do componente de gráfico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const optionsBar: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Fev", "Mar", "Abr", "Mai"],
  },
  yaxis: {
    title: {
      text: "Quantidade",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + " ordens";
      },
    },
  },
};

const seriesBar = [
  {
    name: "Abertas",
    data: [12, 15, 18, 20, 22],
  },
  {
    name: "Concluídas",
    data: [8, 10, 12, 15, 18],
  },
];

const optionsPie: ApexOptions = {
  chart: {
    type: "donut",
  },
  labels: ["Cartão Crédito", "Cartão Débito", "Dinheiro", "PIX"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const seriesPie = [45, 25, 15, 15];

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ordens Abertas</CardTitle>
              <Wrench className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">22</div>
              <p className="text-xs text-muted-foreground">
                +5 desde o mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ordens Concluídas</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                +3 desde o mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">
                +8 desde o mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 12.450,00</div>
              <p className="text-xs text-muted-foreground">
                +12% desde o mês passado
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ordens de Serviço</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Chart
                  options={optionsBar}
                  series={seriesBar}
                  type="bar"
                  height="100%"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Formas de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Chart
                  options={optionsPie}
                  series={seriesPie}
                  type="donut"
                  height="100%"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
