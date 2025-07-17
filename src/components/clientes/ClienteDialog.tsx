"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
}

interface ClienteDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: (cliente: Cliente) => void;
}

export function ClienteDialog({
  isOpen,
  onOpenChange,
  onSuccess,
}: ClienteDialogProps) {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    endereco: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao criar cliente");
      }

      const newCliente = await response.json();
      toast.success("Cliente criado com sucesso!");
      onSuccess(newCliente);
      onOpenChange(false);
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      toast.error(
        error instanceof Error ? error.message : "Erro ao criar cliente"
      );
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        nome: "",
        cpf: "",
        endereco: "",
      });
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Cliente</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="font-medium">Nome</label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="cpf" className="font-medium">CPF</label>
            <Input
              id="cpf"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="endereco" className="font-medium">Endereço</label>
            <Input
              id="endereco"
              value={formData.endereco}
              onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
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
    </Dialog>
  );
} 