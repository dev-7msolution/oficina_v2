"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import {
  Plus,
  Search,
  Trash2,
  CreditCard,
  QrCode,
  X,
} from "lucide-react";
import { ClienteDialog } from "@/components/clientes/ClienteDialog";

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
}

interface Peca {
  id: number;
  nome: string;
  valorUnitario: number;
}

interface OrdemServicoDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: () => void;
  ordemServicoToEdit?: OrdemServico | null;
}

export function OrdemServicoDialog({
  isOpen,
  onOpenChange,
  onSuccess,
  ordemServicoToEdit,
}: OrdemServicoDialogProps) {
  const [clientesFiltrados, setClientesFiltrados] = useState<Cliente[]>([]);
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [tiposServico, setTiposServico] = useState<TipoServico[]>([]);
  const [pecas, setPecas] = useState<Peca[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [selectedVeiculo, setSelectedVeiculo] = useState<Veiculo | null>(null);
  const [searchServico, setSearchServico] = useState("");
  const [searchPeca, setSearchPeca] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    veiculoId: "",
    observacoes: "",
    tipoPagamento: "",
    itensServico: [] as ItemServico[],
    itensPeca: [] as ItemPeca[],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isClienteDialogOpen, setIsClienteDialogOpen] = useState(false);

  const resetState = useCallback(() => {
    setClientesFiltrados([]);
    setVeiculos([]);
    setSelectedCliente(null);
    setSelectedVeiculo(null);
    setSearchServico("");
    setSearchPeca("");
    setSearchTerm("");
    setIsSearching(false);
    setFormData({
      id: "",
      veiculoId: "",
      observacoes: "",
      tipoPagamento: "",
      itensServico: [],
      itensPeca: [],
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchTiposServico();
      fetchPecas();
      if (ordemServicoToEdit) {
        setSelectedCliente(ordemServicoToEdit.veiculo.cliente);
        setSelectedVeiculo(ordemServicoToEdit.veiculo);
        setFormData({
          id: ordemServicoToEdit.id.toString(),
          veiculoId: ordemServicoToEdit.veiculo.id.toString(),
          observacoes: ordemServicoToEdit.observacoes || "",
          tipoPagamento: ordemServicoToEdit.tipoPagamento || "",
          itensServico: ordemServicoToEdit.itensServico.map((item) => ({
            tipoServicoId: item.tipoServico.id,
            quantidade: item.quantidade,
            valorUnitario: item.valorUnitario,
            valorTotal: item.valorTotal,
          })),
          itensPeca: ordemServicoToEdit.itensPeca,
        });
      }
    } else {
      resetState();
    }
  }, [isOpen, ordemServicoToEdit, resetState]);

  const fetchClientes = useCallback(
    async (search: string, signal?: AbortSignal) => {
      try {
        setIsSearching(true);
        const response = await fetch(`/api/clientes?search=${search}`, {
          signal,
        });
        const { data } = await response.json();
        const lowercasedSearch = search.toLowerCase();
        const filteredData = (data || []).filter(
          (cliente: Cliente) =>
            cliente.nome.toLowerCase().includes(lowercasedSearch) ||
            cliente.cpf.includes(search)
        );
        setClientesFiltrados(filteredData);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error("Erro ao buscar clientes:", error);
          toast.error("Erro ao buscar clientes");
          setClientesFiltrados([]);
        }
      } finally {
        setIsSearching(false);
      }
    },
    []
  );

  const fetchVeiculos = async (clienteId: number) => {
    try {
      const response = await fetch(`/api/clientes/${clienteId}/veiculos`);
      const { veiculos } = await response.json();
      setVeiculos(veiculos || []);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
      toast.error("Erro ao buscar veículos");
      setVeiculos([]);
    }
  };

  const fetchTiposServico = async () => {
    try {
      const response = await fetch("/api/gerencial/tipos-servico");
      const data = await response.json();
      setTiposServico(data.tiposServico || []);
    } catch (error) {
      console.error("Erro ao buscar tipos de serviço:", error);
      toast.error("Erro ao buscar tipos de serviço");
      setTiposServico([]);
    }
  };

  const fetchPecas = async () => {
    try {
      const response = await fetch("/api/pecas");
      const data = await response.json();
      setPecas(data.pecas || []);
    } catch (error) {
      console.error("Erro ao buscar peças:", error);
      toast.error("Erro ao buscar peças");
      setPecas([]);
    }
  };

  useEffect(() => {
    if (selectedCliente) {
      fetchVeiculos(selectedCliente.id);
    }
  }, [selectedCliente]);

  useEffect(() => {
    const controller = new AbortController();
    const handler = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchClientes(searchTerm.trim(), controller.signal);
      } else {
        setClientesFiltrados([]);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
      controller.abort();
    };
  }, [searchTerm, fetchClientes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = formData.id
        ? "/api/ordens-servico"
        : "/api/ordens-servico";
      const method = formData.id ? "PUT" : "POST";

      const dataToSend = {
        ...formData,
        veiculoId: parseInt(formData.veiculoId),
        itensServico: formData.itensServico.map((item) => ({
          ...item,
          tipoServicoId: parseInt(item.tipoServicoId.toString()),
          quantidade: parseInt(item.quantidade.toString()),
          valorUnitario: parseFloat(item.valorUnitario.toString()),
          valorTotal: parseFloat(item.valorTotal.toString()),
        })),
        itensPeca: formData.itensPeca.map((item) => ({
          ...item,
          quantidade: parseInt(item.quantidade.toString()),
          valorUnitario: parseFloat(item.valorUnitario.toString()),
          valorTotal: parseFloat(item.valorTotal.toString()),
        })),
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao salvar ordem de serviço");
      }

      toast.success(
        formData.id
          ? "Ordem de serviço atualizada com sucesso!"
          : "Ordem de serviço criada com sucesso!"
      );
      onOpenChange(false);
      onSuccess();
    } catch (error) {
      console.error("Erro ao salvar ordem de serviço:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao salvar ordem de serviço"
      );
    }
  };

  const handleAddItemServico = (tipoServicoId?: number) => {
    setFormData({
      ...formData,
      itensServico: [
        ...formData.itensServico,
        {
          tipoServicoId: tipoServicoId || 0,
          quantidade: 1,
          valorUnitario: tipoServicoId
            ? tiposServico.find((ts) => ts.id === tipoServicoId)?.valor || 0
            : 0,
          valorTotal: tipoServicoId
            ? tiposServico.find((ts) => ts.id === tipoServicoId)?.valor || 0
            : 0,
        },
      ],
    });
  };

  const handleAddItemPeca = (peca?: Peca) => {
    setFormData({
      ...formData,
      itensPeca: [
        ...formData.itensPeca,
        {
          nome: peca?.nome || "",
          quantidade: 1,
          valorUnitario: peca?.valorUnitario || 0,
          valorTotal: peca?.valorUnitario || 0,
        },
      ],
    });
  };

  const handleUpdateItemServico = (
    index: number,
    field: string,
    value: any
  ) => {
    const newItensServico = [...formData.itensServico];
    newItensServico[index] = {
      ...newItensServico[index],
      [field]: value,
    };
    if (field === "tipoServicoId") {
      const tipoServico = tiposServico.find((ts) => ts.id === parseInt(value));
      if (tipoServico) {
        newItensServico[index].valorUnitario = tipoServico.valor;
        newItensServico[index].valorTotal =
          tipoServico.valor * newItensServico[index].quantidade;
      }
    } else if (field === "quantidade") {
      newItensServico[index].valorTotal =
        newItensServico[index].valorUnitario * parseInt(value);
    }
    setFormData({ ...formData, itensServico: newItensServico });
  };

  const handleUpdateItemPeca = (index: number, field: string, value: any) => {
    const newItensPeca = [...formData.itensPeca];
    newItensPeca[index] = {
      ...newItensPeca[index],
      [field]: value,
    };
    if (field === "quantidade" || field === "valorUnitario") {
      newItensPeca[index].valorTotal =
        newItensPeca[index].quantidade * newItensPeca[index].valorUnitario;
    }
    setFormData({ ...formData, itensPeca: newItensPeca });
  };

  const handleRemoveItemServico = (index: number) => {
    const newItensServico = [...formData.itensServico];
    newItensServico.splice(index, 1);
    setFormData({ ...formData, itensServico: newItensServico });
  };

  const handleRemoveItemPeca = (index: number) => {
    const newItensPeca = [...formData.itensPeca];
    newItensPeca.splice(index, 1);
    setFormData({ ...formData, itensPeca: newItensPeca });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogOverlay className="w-full h-full" />
      <DialogContent
        className="overflow-y-auto p-0"
        style={{
          width: "90vw",
          height: "90vh",
          maxWidth: "none",
        }}
      >
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-2xl">
            {formData.id
              ? `Editar Ordem de Serviço #${formData.id}`
              : "Nova Ordem de Serviço"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4 p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Informações do Cliente e Veículo
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="cliente" className="font-medium">
                  Cliente
                </label>
                <div className="relative">
                  <div className="flex gap-2">
                    <Input
                      id="cliente"
                      placeholder="Digite o nome ou CPF do cliente..."
                      value={
                        selectedCliente
                          ? `${selectedCliente.nome} - ${selectedCliente.cpf}`
                          : searchTerm
                      }
                      onChange={(e) => {
                        if (!selectedCliente) {
                          setSearchTerm(e.target.value);
                        }
                      }}
                    />
                    {!selectedCliente && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsClienteDialogOpen(true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                    {selectedCliente && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setSelectedCliente(null);
                          setSelectedVeiculo(null);
                          setFormData({ ...formData, veiculoId: "" });
                          setClientesFiltrados([]);
                          setSearchTerm("");
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  {!selectedCliente && clientesFiltrados.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {isSearching ? (
                        <div className="p-2 text-center text-muted-foreground">
                          Buscando clientes...
                        </div>
                      ) : clientesFiltrados.length === 0 ? (
                        <div className="p-2 text-center text-muted-foreground">
                          Nenhum cliente encontrado
                        </div>
                      ) : (
                        clientesFiltrados.map((cliente) => (
                          <div
                            key={cliente.id}
                            className="p-2 hover:bg-muted cursor-pointer"
                            onClick={() => {
                              setSelectedCliente(cliente);
                              setSelectedVeiculo(null);
                              setFormData({ ...formData, veiculoId: "" });
                              fetchVeiculos(cliente.id);
                              setClientesFiltrados([]);
                              setSearchTerm("");
                            }}
                          >
                            {cliente.nome} - {cliente.cpf}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="veiculo" className="font-medium">
                  Veículo
                </label>
                <Select
                  value={selectedVeiculo?.id.toString()}
                  onValueChange={(value) => {
                    const veiculo = veiculos.find(
                      (v) => v.id.toString() === value
                    );
                    setSelectedVeiculo(veiculo || null);
                    setFormData({ ...formData, veiculoId: value });
                  }}
                  disabled={!selectedCliente}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um veículo" />
                  </SelectTrigger>
                  <SelectContent>
                    {veiculos.map((veiculo) => (
                      <SelectItem
                        key={veiculo.id}
                        value={veiculo.id.toString()}
                      >
                        {veiculo.placa} - {veiculo.modelo.marca.nome}{" "}
                        {veiculo.modelo.nome} {veiculo.ano}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Serviços</h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Input
                    value={searchServico}
                    onChange={(e) => setSearchServico(e.target.value)}
                    placeholder="Buscar serviço..."
                    className="pr-8 w-64"
                  />
                  <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAddItemServico()}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Serviço
                </Button>
              </div>
            </div>
            {searchServico && (
              <div className="mt-2 max-h-40 overflow-y-auto border rounded-md">
                {tiposServico
                  .filter((ts) =>
                    ts.nome
                      .toLowerCase()
                      .includes(searchServico.toLowerCase())
                  )
                  .map((ts) => (
                    <div
                      key={ts.id}
                      className="p-2 hover:bg-muted cursor-pointer"
                      onClick={() => {
                        handleAddItemServico(ts.id);
                        setSearchServico("");
                      }}
                    >
                      {ts.nome} - R$ {ts.valor.toFixed(2)}
                    </div>
                  ))}
              </div>
            )}
            <div className="space-y-4">
              {formData.itensServico.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-6 p-6 border rounded-lg"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Serviço</label>
                    <Input
                      value={
                        tiposServico.find(
                          (ts) => ts.id === item.tipoServicoId
                        )?.nome || ""
                      }
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Quantidade</label>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantidade}
                      onChange={(e) =>
                        handleUpdateItemServico(
                          index,
                          "quantidade",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Valor Unitário
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={item.valorUnitario}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Valor Total</label>
                    <Input
                      type="number"
                      step="0.01"
                      value={item.valorTotal}
                      disabled
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItemServico(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 p-6 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Peças</h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Input
                    value={searchPeca}
                    onChange={(e) => setSearchPeca(e.target.value)}
                    placeholder="Buscar peça..."
                    className="pr-8 w-64"
                  />
                  <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAddItemPeca()}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Peça
                </Button>
              </div>
            </div>
            {searchPeca && (
              <div className="mt-2 max-h-40 overflow-y-auto border rounded-md">
                {pecas
                  .filter((p) =>
                    p.nome.toLowerCase().includes(searchPeca.toLowerCase())
                  )
                  .map((p) => (
                    <div
                      key={p.id}
                      className="p-2 hover:bg-muted cursor-pointer"
                      onClick={() => {
                        handleAddItemPeca(p);
                        setSearchPeca("");
                      }}
                    >
                      {p.nome} - R$ {p.valorUnitario.toFixed(2)}
                    </div>
                  ))}
              </div>
            )}
            <div className="space-y-4">
              {formData.itensPeca.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-6 p-6 border rounded-lg"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Nome da Peça
                    </label>
                    <Input value={item.nome} disabled />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Quantidade</label>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantidade}
                      onChange={(e) =>
                        handleUpdateItemPeca(
                          index,
                          "quantidade",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Valor Unitário
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={item.valorUnitario}
                      onChange={(e) =>
                        handleUpdateItemPeca(
                          index,
                          "valorUnitario",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Valor Total</label>
                    <Input
                      type="number"
                      step="0.01"
                      value={item.valorTotal}
                      disabled
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItemPeca(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Informações do Pagamento
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="tipoPagamento" className="font-medium">
                  Tipo de Pagamento
                </label>
                <Select
                  value={formData.tipoPagamento}
                  onValueChange={(value) =>
                    setFormData({ ...formData, tipoPagamento: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de pagamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CARTÃO">
                      <div className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Cartão
                      </div>
                    </SelectItem>
                    <SelectItem value="PIX">
                      <div className="flex items-center">
                        <QrCode className="mr-2 h-4 w-4" />
                        PIX
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="observacoes" className="font-medium">
                  Observações
                </label>
                <textarea
                  id="observacoes"
                  value={formData.observacoes}
                  onChange={(e) =>
                    setFormData({ ...formData, observacoes: e.target.value })
                  }
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Digite as observações..."
                />
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total de Peças:</span>
                <span className="font-semibold">
                  R${" "}
                  {formData.itensPeca
                    .reduce((total, item) => total + item.valorTotal, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-medium">Total de Serviços:</span>
                <span className="font-semibold">
                  R${" "}
                  {formData.itensServico
                    .reduce((total, item) => total + item.valorTotal, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <span className="font-bold text-lg">Valor Total:</span>
                <span className="font-bold text-lg">
                  R${" "}
                  {(
                    formData.itensPeca.reduce(
                      (total, item) => total + item.valorTotal,
                      0
                    ) +
                    formData.itensServico.reduce(
                      (total, item) => total + item.valorTotal,
                      0
                    )
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 p-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </DialogContent>
      <ClienteDialog 
        isOpen={isClienteDialogOpen}
        onOpenChange={setIsClienteDialogOpen}
        onSuccess={(newCliente) => {
          setSelectedCliente(newCliente);
          fetchVeiculos(newCliente.id);
          setIsClienteDialogOpen(false);
        }}
      />
    </Dialog>
  );
} 