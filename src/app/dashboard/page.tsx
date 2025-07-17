"use client";

import { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileDown, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for service orders
const initialServiceOrders = [
  { id: 'OS-001', customer: 'Cliente A', createdAt: new Date('2023-10-01T10:00:00Z'), vehicle: 'Fiat Uno', serviceDetails: 'Troca de óleo e filtro.', price: 'R$ 250,00', status: 'concluída' },
  { id: 'OS-002', customer: 'Cliente B', createdAt: new Date('2023-10-05T11:30:00Z'), vehicle: 'VW Gol', serviceDetails: 'Alinhamento e balanceamento.', price: 'R$ 180,00', status: 'aberta' },
  { id: 'OS-003', customer: 'Cliente A', createdAt: new Date('2023-10-10T15:00:00Z'), vehicle: 'Fiat Uno', serviceDetails: 'Troca da correia dentada.', price: 'R$ 450,00', status: 'aberta' },
  { id: 'OS-004', customer: 'Cliente C', createdAt: new Date('2023-10-15T09:00:00Z'), vehicle: 'Chevrolet Onix', serviceDetails: 'Revisão geral.', price: 'R$ 600,00', status: 'concluída' },
  { id: 'OS-005', customer: 'Cliente B', createdAt: new Date('2023-10-20T18:45:00Z'), vehicle: 'VW Gol', serviceDetails: 'Troca de pastilhas de freio.', price: 'R$ 320,00', status: 'aberta' },
];

export default function ReportPage() {
  const [serviceOrders, setServiceOrders] = useState(initialServiceOrders);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customer, setCustomer] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(serviceOrders);

  const handleFilter = () => {
    let orders = serviceOrders;

    if (startDate) {
      const start = new Date(startDate);
      orders = orders.filter(order => order.createdAt >= start);
    }

    if (endDate) {
      const end = new Date(endDate);
      end.setUTCHours(23, 59, 59, 999);
      orders = orders.filter(order => order.createdAt <= end);
    }

    if (customer) {
      orders = orders.filter(order =>
        order.customer.toLowerCase().includes(customer.toLowerCase())
      );
    }

    setFilteredOrders(orders);
  };

  const handleCompleteOrder = (orderId: string) => {
    const newServiceOrders = serviceOrders.map(order => 
      order.id === orderId ? { ...order, status: 'concluída' as const } : order
    );
    setServiceOrders(newServiceOrders);

    // Re-apply filters with the updated data
    let orders = newServiceOrders;
    if (startDate) {
      const start = new Date(startDate);
      orders = orders.filter(order => order.createdAt >= start);
    }
    if (endDate) {
      const end = new Date(endDate);
      end.setUTCHours(23, 59, 59, 999);
      orders = orders.filter(order => order.createdAt <= end);
    }
    if (customer) {
      orders = orders.filter(order =>
        order.customer.toLowerCase().includes(customer.toLowerCase())
      );
    }
    setFilteredOrders(orders);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    doc.text("Relatório de Ordens de Serviço", 14, 16);

    autoTable(doc, {
      startY: 22,
      head: [['Nº Ordem de Serviço', 'Cliente', 'Data de Cadastro']],
      body: filteredOrders.map(order => [
        order.id,
        order.customer,
        order.createdAt.toLocaleDateString('pt-BR'),
      ]),
    });

    doc.save('relatorio_ordens_servico.pdf');
  };

  const handleExportSingleOrderPDF = (order: typeof serviceOrders[0]) => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    // 1. Cabeçalho da Empresa
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text("Nome da Sua Oficina", 14, 20);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text("Rua Fictícia, 123 - Bairro Centro", 14, 26);
    doc.text("Sua Cidade, SEU ESTADO - CEP 12345-678", 14, 32);
    doc.text("Telefone: (99) 99999-9999", 14, 38);

    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(`Ordem de Serviço #${order.id}`, pageWidth / 2, 50, { align: 'center' });

    // 2. Box de Detalhes do Cliente e Veículo
    doc.setDrawColor(200); // cinza
    doc.rect(14, 60, pageWidth - 28, 40);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Detalhes do Cliente e Veículo", 20, 68);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Cliente: ${order.customer}`, 20, 78);
    doc.text(`Veículo: ${order.vehicle}`, 20, 86);
    doc.text(`Data de Abertura: ${order.createdAt.toLocaleDateString('pt-BR')}`, pageWidth - 20, 78, { align: 'right' });

    // 3. Seção de Detalhes do Serviço
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Serviços Realizados", 14, 115);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    const serviceText = doc.splitTextToSize(order.serviceDetails, pageWidth - 28);
    doc.text(serviceText, 14, 125);

    // 4. Seção de Preço e Assinatura
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`Valor Total: ${order.price}`, pageWidth - 20, 160, { align: 'right' });

    const signatureY = pageHeight - 50;
    doc.line(pageWidth / 2 - 50, signatureY, pageWidth / 2 + 50, signatureY);
    doc.text("Assinatura do Cliente", pageWidth / 2, signatureY + 8, { align: 'center' });

    // 5. Rodapé
    doc.setFontSize(8);
    doc.setTextColor(150);
    const today = new Date();
    doc.text(
      `Documento gerado em ${today.toLocaleDateString('pt-BR')} às ${today.toLocaleTimeString('pt-BR')}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );

    doc.save(`OS_${order.id}.pdf`);
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Relatório de Ordens de Serviço</h1>

        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="start-date">Data Inicial</Label>
                <Input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">Data Final</Label>
                <Input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customer">Cliente</Label>
                <Input
                  id="customer"
                  placeholder="Nome do cliente"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-6 md:pt-0">
                <Button onClick={handleFilter}>
                  Filtrar
                </Button>
                <Button onClick={handleExportPDF} variant="outline">
                  Exportar PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resultados</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº Ordem de Serviço</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data de Cadastro</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map(order => (
                  <TableRow key={order.id} className={order.status === 'concluída' ? 'text-muted-foreground' : ''}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.createdAt.toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell>
                      <Badge variant={order.status === 'concluída' ? 'secondary' : 'default'}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      {order.status === 'aberta' && (
                        <Button
                          variant="outline"
                          size="icon"
                          title="Concluir Ordem"
                          onClick={() => handleCompleteOrder(order.id)}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="icon"
                        title="Exportar PDF"
                        onClick={() => handleExportSingleOrderPDF(order)}
                      >
                        <FileDown className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
