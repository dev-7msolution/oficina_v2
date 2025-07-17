"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "react-toastify";
import { Plus, Search, AlertTriangle } from "lucide-react";

interface Peca {
  id: number;
  nome: string;
  descricao: string;
  valorUnitario: number;
  quantidadeEstoque: number;
  quantidadeMinima: number;
}

export default function EstoquePage() {
  const [pecas, setPecas] = useState<Peca[]>([]);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPeca, setSelectedPeca] = useState<Peca | null>(null);
  const [quantidade, setQuantidade] = useState("");

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

  const handleEntrada = (peca: Peca) => {
    setSelectedPeca(peca);
    setQuantidade("");
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPeca) return;

    try {
      const response = await fetch(`/api/pecas/${selectedPeca.id}/estoque`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantidade: parseInt(quantidade),
          tipo: "ENTRADA",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar entrada no estoque");
      }

      toast.success("Entrada registrada com sucesso!");
      setIsDialogOpen(false);
      setSelectedPeca(null);
      setQuantidade("");
      fetchPecas();
    } catch (error) {
      console.error("Erro ao registrar entrada:", error);
      toast.error("Erro ao registrar entrada no estoque");
    }
  };

  const filteredPecas = pecas.filter((peca) =>
    peca.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Estoque</h1>
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
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPecas.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
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
                      {peca.quantidadeEstoque <= peca.quantidadeMinima ? (
                        <div className="flex items-center text-yellow-600">
                          <AlertTriangle className="mr-1 h-4 w-4" />
                          Baixo Estoque
                        </div>
                      ) : (
                        <div className="text-green-600">Normal</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEntrada(peca)}
                      >
                        Registrar Entrada
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registrar Entrada no Estoque</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Peça</label>
                <Input
                  value={selectedPeca?.nome || ""}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Quantidade</label>
                <Input
                  type="number"
                  min="1"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                  placeholder="Quantidade a adicionar"
                  required
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
                <Button type="submit">Registrar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
} 