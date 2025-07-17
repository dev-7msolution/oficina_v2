"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Pencil, Trash2, ChevronLeft, ChevronRight, Car, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModeloVeiculo {
  id: number;
  nome: string;
  marca: {
    nome: string;
  };
  anoInicio: number | null;
  anoFim: number | null;
}

interface Cliente {
  id: number;
  cpf: string;
  nome: string;
  endereco: string;
  veiculos: {
    id: number;
    placa: string;
    modelo: {
      id: number;
      nome: string;
      marca: {
        nome: string;
      };
      anoInicio: number | null;
      anoFim: number | null;
    };
    ano: number;
    cor: string;
  }[];
}

interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export default function ClientesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isVeiculoDialogOpen, setIsVeiculoDialogOpen] = useState(false);
  const [isVeiculosDialogOpen, setIsVeiculosDialogOpen] = useState(false);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [modelos, setModelos] = useState<ModeloVeiculo[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    pages: 0,
    page: 1,
    limit: 10,
  });
  const [formData, setFormData] = useState({
    id: "",
    cpf: "",
    nome: "",
    endereco: "",
    placa: "",
    modeloId: "",
    ano: "",
    cor: "",
  });
  const [veiculoFormData, setVeiculoFormData] = useState({
    id: "",
    clienteId: "",
    placa: "",
    modeloId: "",
    ano: "",
    cor: "",
  });
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);

  useEffect(() => {
    fetchClientes();
    fetchModelos();
  }, [pagination.page, pagination.limit]);

  const fetchClientes = async () => {
    try {
      const response = await fetch(
        `/api/clientes?page=${pagination.page}&limit=${pagination.limit}`
      );
      const { data, pagination: paginationData } = await response.json();
      setClientes(Array.isArray(data) ? data : []);
      setPagination(paginationData);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      setClientes([]);
    }
  };

  const fetchModelos = async () => {
    try {
      const response = await fetch("/api/modelos");
      const { data } = await response.json();
      console.log("Modelos recebidos:", data); // Debug log
      setModelos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
      setModelos([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (formData.modeloId === "0") {
        toast.error("Por favor, selecione um modelo de veículo válido");
        return;
      }

      const response = await fetch("/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpf: formData.cpf,
          nome: formData.nome,
          endereco: formData.endereco,
          veiculo: {
            placa: formData.placa,
            modeloId: formData.modeloId,
            ano: formData.ano,
            cor: formData.cor,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Cliente cadastrado com sucesso!");
        fetchClientes();
        setIsDialogOpen(false);
        setFormData({
          id: "",
          cpf: "",
          nome: "",
          endereco: "",
          placa: "",
          modeloId: "",
          ano: "",
          cor: "",
        });
      } else {
        toast.error(data.error || "Erro ao criar cliente");
      }
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      toast.error("Erro ao criar cliente. Por favor, tente novamente.");
    }
  };

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  const handleLimitChange = (newLimit: string) => {
    setPagination((prev) => ({ ...prev, limit: parseInt(newLimit), page: 1 }));
  };

  const getModeloLabel = (modelo: ModeloVeiculo) => {
    const anoRange = modelo.anoInicio
      ? modelo.anoFim
        ? `${modelo.anoInicio}-${modelo.anoFim}`
        : `${modelo.anoInicio}+`
      : "";
    return `${modelo.marca.nome} ${modelo.nome}${anoRange ? ` (${anoRange})` : ""}`;
  };

  const handleEdit = (cliente: Cliente) => {
    const primeiroVeiculo = cliente.veiculos[0];
    setFormData({
      id: cliente.id.toString(),
      cpf: cliente.cpf,
      nome: cliente.nome,
      endereco: cliente.endereco,
      placa: primeiroVeiculo?.placa || "",
      modeloId: primeiroVeiculo?.modelo.id.toString() || "",
      ano: primeiroVeiculo?.ano.toString() || "",
      cor: primeiroVeiculo?.cor || "",
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (formData.modeloId === "0") {
        toast.error("Por favor, selecione um modelo de veículo válido");
        return;
      }

      const response = await fetch("/api/clientes", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.id,
          cpf: formData.cpf,
          nome: formData.nome,
          endereco: formData.endereco,
          veiculo: {
            placa: formData.placa,
            modeloId: formData.modeloId,
            ano: formData.ano,
            cor: formData.cor,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Cliente atualizado com sucesso!");
        fetchClientes();
        setIsEditDialogOpen(false);
        setFormData({
          id: "",
          cpf: "",
          nome: "",
          endereco: "",
          placa: "",
          modeloId: "",
          ano: "",
          cor: "",
        });
      } else {
        toast.error(data.error || "Erro ao atualizar cliente");
      }
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      toast.error("Erro ao atualizar cliente. Por favor, tente novamente.");
    }
  };

  const handleAddVeiculo = (clienteId: number) => {
    setVeiculoFormData({
      id: "",
      clienteId: clienteId.toString(),
      placa: "",
      modeloId: "",
      ano: "",
      cor: "",
    });
    setIsVeiculoDialogOpen(true);
  };

  const handleEditVeiculo = (veiculo: Cliente["veiculos"][0]) => {
    setVeiculoFormData({
      id: veiculo.id.toString(),
      clienteId: "",
      placa: veiculo.placa,
      modeloId: veiculo.modelo.id.toString(),
      ano: veiculo.ano.toString(),
      cor: veiculo.cor,
    });
    setIsVeiculoDialogOpen(true);
  };

  const handleDeleteVeiculo = async (veiculoId: number) => {
    if (window.confirm("Tem certeza que deseja excluir este veículo?")) {
      try {
        const response = await fetch(`/api/veiculos/${veiculoId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("Veículo excluído com sucesso!");
          fetchClientes();
        } else {
          const data = await response.json();
          toast.error(data.error || "Erro ao excluir veículo");
        }
      } catch (error) {
        console.error("Erro ao excluir veículo:", error);
        toast.error("Erro ao excluir veículo. Por favor, tente novamente.");
      }
    }
  };

  const handleVeiculoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (veiculoFormData.modeloId === "0") {
        toast.error("Por favor, selecione um modelo de veículo válido");
        return;
      }

      const url = veiculoFormData.id
        ? `/api/veiculos/${veiculoFormData.id}`
        : "/api/veiculos";
      const method = veiculoFormData.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clienteId: parseInt(veiculoFormData.clienteId),
          placa: veiculoFormData.placa,
          modeloId: parseInt(veiculoFormData.modeloId),
          ano: parseInt(veiculoFormData.ano),
          cor: veiculoFormData.cor,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          veiculoFormData.id
            ? "Veículo atualizado com sucesso!"
            : "Veículo cadastrado com sucesso!"
        );
        fetchClientes();
        setIsVeiculoDialogOpen(false);
        setIsVeiculosDialogOpen(false);
        setVeiculoFormData({
          id: "",
          clienteId: "",
          placa: "",
          modeloId: "",
          ano: "",
          cor: "",
        });
      } else {
        toast.error(data.error || "Erro ao salvar veículo");
      }
    } catch (error) {
      console.error("Erro ao salvar veículo:", error);
      toast.error("Erro ao salvar veículo. Por favor, tente novamente.");
    }
  };

  const handleViewVeiculos = (cliente: Cliente) => {
    setSelectedCliente(cliente);
    setIsVeiculosDialogOpen(true);
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Clientes</h1>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (open) {
              setFormData({
                id: "",
                cpf: "",
                nome: "",
                endereco: "",
                placa: "",
                modeloId: "",
                ano: "",
                cor: "",
              });
            }
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Novo Cliente
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={(e) =>
                        setFormData({ ...formData, cpf: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input
                      id="nome"
                      placeholder="Nome completo"
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    id="endereco"
                    placeholder="Endereço completo"
                    value={formData.endereco}
                    onChange={(e) =>
                      setFormData({ ...formData, endereco: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="placa">Placa do Veículo</Label>
                    <Input
                      id="placa"
                      placeholder="ABC-1234"
                      value={formData.placa}
                      onChange={(e) =>
                        setFormData({ ...formData, placa: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modelo">Modelo do Veículo</Label>
                    <Select
                      value={formData.modeloId}
                      onValueChange={(value) =>
                        setFormData({ ...formData, modeloId: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o modelo" />
                      </SelectTrigger>
                      <SelectContent>
                        {modelos.length > 0 ? (
                          modelos.map((modelo) => (
                            <SelectItem
                              key={modelo.id}
                              value={modelo.id.toString()}
                            >
                              {getModeloLabel(modelo)}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="0" disabled>
                            Nenhum modelo disponível
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ano">Ano</Label>
                    <Input
                      id="ano"
                      type="number"
                      placeholder="2020"
                      value={formData.ano}
                      onChange={(e) =>
                        setFormData({ ...formData, ano: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cor">Cor</Label>
                    <Input
                      id="cor"
                      placeholder="Cor do veículo"
                      value={formData.cor}
                      onChange={(e) =>
                        setFormData({ ...formData, cor: e.target.value })
                      }
                    />
                  </div>
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
              placeholder="Buscar cliente..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">Filtrar</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>CPF</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Endereço</TableHead>
                <TableHead>Veículos</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    Nenhum cliente cadastrado
                  </TableCell>
                </TableRow>
              ) : (
                clientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>{cliente.cpf}</TableCell>
                    <TableCell>{cliente.nome}</TableCell>
                    <TableCell>{cliente.endereco}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewVeiculos(cliente)}
                        className="flex items-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">
                          {cliente.veiculos.length} veículo{cliente.veiculos.length !== 1 ? 's' : ''}
                        </span>
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(cliente)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Itens por página
            </span>
            <Select
              value={pagination.limit.toString()}
              onValueChange={handleLimitChange}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 30, 40, 50].map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground">
              Total: {pagination.total} itens
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              Página {pagination.page} de {pagination.pages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page >= pagination.pages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Modal de Edição */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Editar Cliente</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-cpf">CPF</Label>
                  <Input
                    id="edit-cpf"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) =>
                      setFormData({ ...formData, cpf: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-nome">Nome</Label>
                  <Input
                    id="edit-nome"
                    placeholder="Nome completo"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-endereco">Endereço</Label>
                <Input
                  id="edit-endereco"
                  placeholder="Endereço completo"
                  value={formData.endereco}
                  onChange={(e) =>
                    setFormData({ ...formData, endereco: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-placa">Placa do Veículo</Label>
                  <Input
                    id="edit-placa"
                    placeholder="ABC-1234"
                    value={formData.placa}
                    onChange={(e) =>
                      setFormData({ ...formData, placa: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-modelo">Modelo do Veículo</Label>
                  <Select
                    value={formData.modeloId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, modeloId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      {modelos.length > 0 ? (
                        modelos.map((modelo) => (
                          <SelectItem
                            key={modelo.id}
                            value={modelo.id.toString()}
                          >
                            {getModeloLabel(modelo)}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="0" disabled>
                          Nenhum modelo disponível
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-ano">Ano</Label>
                  <Input
                    id="edit-ano"
                    type="number"
                    placeholder="2020"
                    value={formData.ano}
                    onChange={(e) =>
                      setFormData({ ...formData, ano: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-cor">Cor</Label>
                  <Input
                    id="edit-cor"
                    placeholder="Cor do veículo"
                    value={formData.cor}
                    onChange={(e) =>
                      setFormData({ ...formData, cor: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Modal de Veículos */}
        <Dialog open={isVeiculosDialogOpen} onOpenChange={setIsVeiculosDialogOpen}>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Veículos de {selectedCliente?.nome}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-end">
                <Button onClick={() => {
                  if (selectedCliente) {
                    handleAddVeiculo(selectedCliente.id);
                  }
                }}>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Veículo
                </Button>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Placa</TableHead>
                      <TableHead>Modelo</TableHead>
                      <TableHead>Ano</TableHead>
                      <TableHead>Cor</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedCliente?.veiculos.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center">
                          Nenhum veículo cadastrado
                        </TableCell>
                      </TableRow>
                    ) : (
                      selectedCliente?.veiculos.map((veiculo) => (
                        <TableRow key={veiculo.id}>
                          <TableCell>{veiculo.placa}</TableCell>
                          <TableCell>
                            {veiculo.modelo.marca.nome} {veiculo.modelo.nome}
                          </TableCell>
                          <TableCell>{veiculo.ano}</TableCell>
                          <TableCell>{veiculo.cor}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                handleEditVeiculo(veiculo);
                                setIsVeiculosDialogOpen(false);
                              }}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteVeiculo(veiculo.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal de Adicionar/Editar Veículo */}
        <Dialog open={isVeiculoDialogOpen} onOpenChange={setIsVeiculoDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {veiculoFormData.id ? "Editar Veículo" : "Adicionar Veículo"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleVeiculoSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="veiculo-placa">Placa</Label>
                  <Input
                    id="veiculo-placa"
                    placeholder="ABC-1234"
                    value={veiculoFormData.placa}
                    onChange={(e) =>
                      setVeiculoFormData({
                        ...veiculoFormData,
                        placa: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="veiculo-modelo">Modelo</Label>
                  <Select
                    value={veiculoFormData.modeloId}
                    onValueChange={(value) =>
                      setVeiculoFormData({
                        ...veiculoFormData,
                        modeloId: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      {modelos.length > 0 ? (
                        modelos.map((modelo) => (
                          <SelectItem
                            key={modelo.id}
                            value={modelo.id.toString()}
                          >
                            {getModeloLabel(modelo)}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="0" disabled>
                          Nenhum modelo disponível
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="veiculo-ano">Ano</Label>
                  <Input
                    id="veiculo-ano"
                    type="number"
                    placeholder="2020"
                    value={veiculoFormData.ano}
                    onChange={(e) =>
                      setVeiculoFormData({
                        ...veiculoFormData,
                        ano: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="veiculo-cor">Cor</Label>
                  <Input
                    id="veiculo-cor"
                    placeholder="Cor do veículo"
                    value={veiculoFormData.cor}
                    onChange={(e) =>
                      setVeiculoFormData({
                        ...veiculoFormData,
                        cor: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsVeiculoDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
} 