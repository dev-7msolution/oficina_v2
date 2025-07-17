"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "react-toastify";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

interface Peca {
  id: number;
  nome: string;
  descricao: string;
  valorUnitario: number;
  quantidadeEstoque: number;
  quantidadeMinima: number;
}

export default function PecasPage() {
  const [pecas, setPecas] = useState<Peca[]>([]);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPeca, setSelectedPeca] = useState<Peca | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    valorUnitario: "",
    quantidadeMinima: "",
  });

  const fetchPecas = async () => {
    try {
      const response = await fetch("/api/pecas");
      const data = await response.json();
      setPecas(data.pecas || []);
    } catch (error) {
      console.error("Erro ao buscar peças:", error);
      toast.error("Erro ao buscar peças");
    }
  };

  useEffect(() => {
    fetchPecas();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = {
        nome: formData.nome,
        descricao: formData.descricao,
        valorUnitario: parseFloat(formData.valorUnitario),
        quantidadeMinima: parseInt(formData.quantidadeMinima) || 0,
      };

      if (selectedPeca) {
        const response = await fetch(`/api/pecas/${selectedPeca.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Erro ao atualizar peça");
        }

        toast.success("Peça atualizada com sucesso!");
      } else {
        const response = await fetch("/api/pecas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Erro ao criar peça");
        }

        toast.success("Peça criada com sucesso!");
      }

      setIsDialogOpen(false);
      setSelectedPeca(null);
      setFormData({
        nome: "",
        descricao: "",
        valorUnitario: "",
        quantidadeMinima: "",
      });
      fetchPecas();
    } catch (error) {
      console.error("Erro ao salvar peça:", error);
      toast.error("Erro ao salvar peça");
    }
  };

  const handleEdit = (peca: Peca) => {
    setSelectedPeca(peca);
    setFormData({
      nome: peca.nome,
      descricao: peca.descricao || "",
      valorUnitario: peca.valorUnitario.toString(),
      quantidadeMinima: peca.quantidadeMinima.toString(),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (peca: Peca) => {
    if (!confirm("Tem certeza que deseja excluir esta peça?")) {
      return;
    }

    try {
      const response = await fetch(`/api/pecas/${peca.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir peça");
      }

      toast.success("Peça excluída com sucesso!");
      fetchPecas();
    } catch (error) {
      console.error("Erro ao excluir peça:", error);
      toast.error("Erro ao excluir peça");
    }
  };

  const filteredPecas = pecas.filter((peca) =>
    peca.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Peças</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nova Peça
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {selectedPeca ? "Editar Peça" : "Nova Peça"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    placeholder="Nome da peça"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Descrição</label>
                  <Input
                    value={formData.descricao}
                    onChange={(e) =>
                      setFormData({ ...formData, descricao: e.target.value })
                    }
                    placeholder="Descrição da peça"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Valor Unitário</label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.valorUnitario}
                    onChange={(e) =>
                      setFormData({ ...formData, valorUnitario: e.target.value })
                    }
                    placeholder="Valor unitário"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantidade Mínima</label>
                  <Input
                    type="number"
                    min="0"
                    value={formData.quantidadeMinima}
                    onChange={(e) =>
                      setFormData({ ...formData, quantidadeMinima: e.target.value })
                    }
                    placeholder="Quantidade mínima em estoque"
                  />
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
              placeholder="Buscar por nome..."
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
                <TableHead>Valor Unitário</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Mínimo</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPecas.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Nenhuma peça encontrada
                  </TableCell>
                </TableRow>
              ) : (
                filteredPecas.map((peca) => (
                  <TableRow key={peca.id}>
                    <TableCell>{peca.nome}</TableCell>
                    <TableCell>{peca.descricao}</TableCell>
                    <TableCell>R$ {peca.valorUnitario.toFixed(2)}</TableCell>
                    <TableCell>{peca.quantidadeEstoque}</TableCell>
                    <TableCell>{peca.quantidadeMinima}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(peca)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(peca)}
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
      </div>
    </MainLayout>
  );
} 