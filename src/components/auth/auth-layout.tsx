"use client";

import Image from "next/image";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left side - Logo and background */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-primary p-8 text-primary-foreground">
        <div className="relative w-full max-w-md aspect-square">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="mt-8 text-4xl font-bold">Bem-vindo</h1>
        <p className="mt-4 text-center text-lg">
          Faça login para acessar sua conta e começar a usar nossa plataforma
        </p>
      </div>

      {/* Right side - Login form */}
      <div className="flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
} 