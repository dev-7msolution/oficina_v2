"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, LayoutDashboard, Users, Car, Wrench, Settings, LogOut, FileText, DollarSign } from "lucide-react";
import { signOut } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Sidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Clientes",
      href: "/clientes",
      icon: Users,
    },
    {
      title: "Veículos",
      href: "/veiculos",
      icon: Car,
    },
    {
      title: "Ordem de Serviço",
      href: "/ordens-servico",
      icon: FileText,
    },
    {
      title: "Serviços",
      href: "/servicos",
      icon: Wrench,
    },
    {
      title: "Financeiro",
      href: "/financeiro",
      icon: DollarSign,
    },
    {
      title: "Gerencial",
      icon: Settings,
      children: [
        {
          title: "Marcas",
          href: "/gerencial/marcas",
        },
        {
          title: "Modelos",
          href: "/gerencial/modelos",
        },
        {
          title: "Tipos de Serviço",
          href: "/gerencial/tipos-servico",
        },
        {
          title: "Peças",
          href: "/gerencial/pecas",
        },
        {
          title: "Estoque",
          href: "/gerencial/estoque",
        },
      ],
    },
  ];

  return (
    <div
      className={cn(
        "flex h-screen w-64 flex-col border-r bg-background",
        className
      )}
      {...props}
    >
      <div className="flex h-14 items-center border-b px-4">
        <h1 className="text-lg font-semibold">Oficina</h1>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.href && "bg-muted text-primary"
                  )}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.title}
                </Link>
              ) : (
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setOpen(!open)}
                  >
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "ml-auto h-4 w-4 transition-transform",
                        open && "rotate-180"
                      )}
                    />
                  </Button>
                  {open && (
                    <div className="ml-4 space-y-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            pathname === child.href && "bg-muted text-primary"
                          )}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </div>
    </div>
  );
}

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
} 