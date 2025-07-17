"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-toastify";
import { Plus, Search, Pencil, Trash2, Car, User, CreditCard, QrCode } from "lucide-react";
import { OrdemServicoDialog } from "@/components/ordens-servico/OrdemServicoDialog";

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
}

interface Veiculo {
  id: number;
  placa: string;
  modelo: {
    nome: string;
    marca: {
      nome: string;
    };
  };
  ano: number;
  cor: string;
}

interface TipoServico {
  id: number;
  nome: string;
  valor: number;
}

interface ItemServico {
  tipoServicoId: number;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

interface ItemPeca {
  nome: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

interface OrdemServico {
  id: number;
  veiculo: Veiculo & {
    cliente: Cliente;
  };
  status: string;
  tipoPagamento: string;
  observacoes: string;
  itensServico: (ItemServico & {
    tipoServico: TipoServico;
  })[];
  itensPeca: ItemPeca[];
  valorTotal: number;
  createdAt: string;
}

export default function OrdensServicoPage() {
  const [ordensServico, setOrdensServico] = useState<OrdemServico[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("TODOS");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingOrdemServico, setEditingOrdemServico] = useState<OrdemServico | null>(null);

  const fetchOrdensServico = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/ordens-servico?page=${page}&limit=10&search=${search}&status=${status}`
      );
      const data = await response.json();
      setOrdensServico(data.ordensServico || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.error("Erro ao buscar ordens de serviço:", error);
      toast.error("Erro ao buscar ordens de serviço");
      setOrdensServico([]);
      setTotal(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrdensServico();
  }, [page, search, status]);

  const handleEdit = (ordemServico: OrdemServico) => {
    setEditingOrdemServico(ordemServico);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta ordem de serviço?")) {
      return;
    }

    try {
      const response = await fetch(`/api/ordens-servico?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir ordem de serviço");
      }

      toast.success("Ordem de serviço excluída com sucesso!");
      fetchOrdensServico();
    } catch (error) {
      console.error("Erro ao excluir ordem de serviço:", error);
      toast.error("Erro ao excluir ordem de serviço");
    }
  };

  const handleSuccess = () => {
    fetchOrdensServico();
    setIsDialogOpen(false);
    setEditingOrdemServico(null);
  }

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ordens de Serviço</h1>
          <Button onClick={() => {
            setEditingOrdemServico(null);
            setIsDialogOpen(true);
          }}>
            <Plus className="mr-2 h-4 w-4" />
            Nova Ordem de Serviço
          </Button>
          <OrdemServicoDialog 
            isOpen={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            onSuccess={handleSuccess}
            ordemServicoToEdit={editingOrdemServico}
          />
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por placa ou nome do cliente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TODOS">Todos</SelectItem>
              <SelectItem value="ABERTO">Aberto</SelectItem>
              <SelectItem value="CONCLUIDO">Concluído</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Nº O.S.</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Veículo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pagamento</TableHead>
                <TableHead>Valor Total</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center">
                    Carregando...
                  </TableCell>
                </TableRow>
              ) : ordensServico.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center">
                    Nenhuma ordem de serviço encontrada
                  </TableCell>
                </TableRow>
              ) : (
                ordensServico.map((ordemServico) => (
                  <TableRow key={ordemServico.id}>
                    <TableCell className="text-center">{ordemServico.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        {ordemServico.veiculo.cliente.nome}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4" />
                        {ordemServico.veiculo.placa} -{" "}
                        {ordemServico.veiculo.modelo.marca.nome}{" "}
                        {ordemServico.veiculo.modelo.nome}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          ordemServico.status === "ABERTO"
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {ordemServico.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {ordemServico.tipoPagamento === "CARTÃO" ? (
                          <CreditCard className="mr-2 h-4 w-4" />
                        ) : (
                          <QrCode className="mr-2 h-4 w-4" />
                        )}
                        {ordemServico.tipoPagamento}
                      </div>
                    </TableCell>
                    <TableCell>
                      R$ {ordemServico.valorTotal.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      {new Date(ordemServico.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(ordemServico)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(ordemServico.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Total: {total} ordens de serviço
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage(page + 1)}
              disabled={page * 10 >= total}
            >
              Próxima
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 