"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

 const scrollToId = useCallback((id: string) => {
  setMobileOpen(false);

  setTimeout(() => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 150); 
}, []);


  return (
    <>
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-50 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
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

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#sobre" className="hover:text-primary transition">
                Sobre
              </a>
              <a href="#como-funciona" className="hover:text-primary transition">
                Como funciona e Benefícios
              </a>
              <a href="#galeria-section" className="hover:text-primary transition">
                Galeria
              </a>
            </nav>

            {/* CTA DESKTOP */}
            <a
              href="mailto:contato@seudominio.com"
              className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
            >
              Fale conosco
            </a>

            {/* BOTÃO MOBILE */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/40 p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE (estilo do exemplo: desce de cima) */}
      <div
        className={`
          fixed inset-x-0 top-0 z-60
          bg-black text-white
          px-6 pt-6 pb-10
          rounded-b-3xl shadow-2xl
          transform transition-transform duration-300
          ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
          <Image
            src="/imagens/logo.png"
            alt="Logo"
            width={140}
            height={34}
            className="object-contain"
            priority
          />

          <button
            type="button"
            className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-2xl"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-2 space-y-8">
          {/* Contato simples (igual vibe do exemplo) */}
          <div className="text-center text-sm text-white/90">
            <a
              href="mailto:contato@seudominio.com"
              className="hover:opacity-90 transition"
            >
              contato@seudominio.com
            </a>
          </div>

          {/* Links centralizados */}
          <nav className="flex flex-col items-center gap-6 text-lg w-full font-semibold tracking-wide">
            <button
              onClick={() => scrollToId("#sobre")}
              className=" hover:opacity-90 transition"
            >
              Sobre
            </button>

            <button
              onClick={() => scrollToId("#como-funciona")}
              className=" hover:opacity-90 transition"
            >
              Como funciona e Benefícios
            </button>

            <button
              onClick={() => scrollToId("#galeria")}
              className=" hover:opacity-90 transition"
            >
              Galeria
            </button>

            <a
              href="mailto:contato@seudominio.com"
              onClick={() => setMobileOpen(false)}
              className=" text-white/95 hover:opacity-90 transition"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
