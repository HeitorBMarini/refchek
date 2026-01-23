"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToId = useCallback(
    (id: string) => {
      setOpen(false);

      // pequeno delay pra garantir que o dropdown fechou antes de rolar
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback se não achar (evita travar)
          window.location.hash = id;
        }
      }, 80);
    },
    []
  );

  return (
    <header className="w-full border-b border-white/10 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/imagens/logo.png"
            alt="Logo"
            width={200}
            height={40}
            priority
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
          <a href="#sobre" className="hover:text-primary transition">
            Sobre
          </a>
          <a href="#como-funciona" className="hover:text-primary transition">
            Como funciona e Benefícios
          </a>
        </nav>

        {/* CTA desktop */}
        <a
          href="mailto:contato@seudominio.com"
          className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
        >
          Fale conosco
        </a>

        {/* Menu mobile - shadcn */}
        <div className="md:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Abrir menu"
                className="flex flex-col gap-1"
              >
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="start"
              sideOffset={16}
              className="
                w-screen left-0 rounded-none
                border-x-0 border-b border-white/10
                bg-primary text-white
                data-[state=open]:animate-in
                data-[state=open]:slide-in-from-top-3
                data-[state=closed]:animate-out
                data-[state=closed]:slide-out-to-top-3
              "
            >
              <div className="flex flex-col items-center justify-center py-8 gap-6 text-base font-medium">
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                    scrollToId("#sobre");
                  }}
                  className="cursor-pointer focus:bg-white/10"
                >
                  Sobre
                </DropdownMenuItem>

                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                    scrollToId("#como-funciona");
                  }}
                  className="cursor-pointer focus:bg-white/10"
                >
                  Como funciona e Benefícios
                </DropdownMenuItem>

                <DropdownMenuItem
                  onSelect={() => setOpen(false)}
                  className="cursor-pointer focus:bg-white/10"
                >
                  <a
                    href="mailto:contato@seudominio.com"
                    className="font-semibold"
                  >
                    Fale conosco
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
