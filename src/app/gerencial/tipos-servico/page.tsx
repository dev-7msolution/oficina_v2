"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "react-toastify";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

interface TipoServico {
  id: number;
  nome: string;
  descricao: string | null;
  valor: number;
  tempoMedio: number | null;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function TiposServicoPage() {
  const [tiposServico, setTiposServico] = useState<TipoServico[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    descricao: "",
    valor: "",
    tempoMedio: "",
    ativo: true,
  });

  const fetchTiposServico = async () => {
    try {
      const response = await fetch(
        `/api/gerencial/tipos-servico?page=${page}&limit=10&search=${search}`
      );
      const data = await response.json();
      setTiposServico(data.tiposServico);
      setTotal(data.total);
    } catch (error) {
      console.error("Erro ao buscar tipos de serviço:", error);
      toast.error("Erro ao buscar tipos de serviço");
    }
  };

  useEffect(() => {
    fetchTiposServico();
  }, [page, search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = formData.id
        ? "/api/gerencial/tipos-servico"
        : "/api/gerencial/tipos-servico";
      const method = formData.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao salvar tipo de serviço");
      }

      toast.success(
        formData.id
          ? "Tipo de serviço atualizado com sucesso!"
          : "Tipo de serviço criado com sucesso!"
      );
      setIsDialogOpen(false);
      setFormData({
        id: "",
        nome: "",
        descricao: "",
        valor: "",
        tempoMedio: "",
        ativo: true,
      });
      fetchTiposServico();
    } catch (error) {
      console.error("Erro ao salvar tipo de serviço:", error);
      toast.error(error instanceof Error ? error.message : "Erro ao salvar tipo de serviço");
    }
  };

  const handleEdit = (tipoServico: TipoServico) => {
    setFormData({
      id: tipoServico.id.toString(),
      nome: tipoServico.nome,
      descricao: tipoServico.descricao || "",
      valor: tipoServico.valor.toString(),
      tempoMedio: tipoServico.tempoMedio?.toString() || "",
      ativo: tipoServico.ativo,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este tipo de serviço?")) {
      return;
    }

    try {
      const response = await fetch(`/api/gerencial/tipos-servico?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir tipo de serviço");
      }

      toast.success("Tipo de serviço excluído com sucesso!");
      fetchTiposServico();
    } catch (error) {
      console.error("Erro ao excluir tipo de serviço:", error);
      toast.error("Erro ao excluir tipo de serviço");
    }
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tipos de Serviço</h1>
          <Dialog 
            open={isDialogOpen} 
            onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) {
                setFormData({
                  id: "",
                  nome: "",
                  descricao: "",
                  valor: "",
                  tempoMedio: "",
                  ativo: true,
                });
              }
            }}
          >
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Novo Tipo de Serviço
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {formData.id ? "Editar Tipo de Serviço" : "Novo Tipo de Serviço"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="nome">Nome</label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="descricao">Descrição</label>
                  <Input
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) =>
                      setFormData({ ...formData, descricao: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="valor">Valor (R$)</label>
                  <Input
                    id="valor"
                    type="number"
                    step="0.01"
                    value={formData.valor}
                    onChange={(e) =>
                      setFormData({ ...formData, valor: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="tempoMedio">Tempo Médio (minutos)</label>
                  <Input
                    id="tempoMedio"
                    type="number"
                    value={formData.tempoMedio}
                    onChange={(e) =>
                      setFormData({ ...formData, tempoMedio: e.target.value })
                    }
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="ativo"
                    checked={formData.ativo}
                    onChange={(e) =>
                      setFormData({ ...formData, ativo: e.target.checked })
                    }
                  />
                  <label htmlFor="ativo">Ativo</label>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou descrição..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Tempo Médio</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tiposServico.map((tipoServico) => (
                <TableRow key={tipoServico.id}>
                  <TableCell>{tipoServico.nome}</TableCell>
                  <TableCell>{tipoServico.descricao}</TableCell>
                  <TableCell>
                    R$ {tipoServico.valor.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {tipoServico.tempoMedio
                      ? `${tipoServico.tempoMedio} min`
                      : "-"}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        tipoServico.ativo
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {tipoServico.ativo ? "Ativo" : "Inativo"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(tipoServico)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(tipoServico.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Total: {total} tipos de serviço
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