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
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function CadastroPage() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Cadastro de Peças</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Peça
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar peça..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">Filtrar</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Marca</TableHead>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Preço de Compra</TableHead>
                <TableHead>Preço de Venda</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  Nenhuma peça cadastrada
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
} 