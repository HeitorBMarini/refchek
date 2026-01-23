"use client";

import { motion } from "framer-motion";

export default function CTAStyled() {
  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-primary
            shadow-2xl
          "
        >
          {/* “ondas” circulares à direita */}
          <div className="pointer-events-none absolute -right-30 top-1/2 -translate-y-1/2">
            <div className="relative h-130 w-130">
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div className="absolute inset-15 rounded-full bg-white/10" />
              <div className="absolute inset-30 rounded-full bg-white/10" />
              <div className="absolute inset-45 rounded-full bg-white/10" />
              <div className="absolute inset-60 rounded-full bg-white/10" />
            </div>
          </div>

          {/* brilho suave */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

          <div className="relative z-10 grid gap-10 p-10 md:p-14 lg:grid-cols-12 lg:items-center">
            {/* Texto */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Vamos conversar.
              </h2>

              <p className="mt-4 max-w-2xl text-white/85 md:text-lg leading-relaxed">
                Quer levar o treinamento de arbitragem para o próximo nível?
                Entre em contato para conhecer o projeto, solicitar uma demonstração
                e participar da evolução do RefCheck.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:contato@seudominio.com?subject=Solicitar%20demonstra%C3%A7%C3%A3o%20-%20RefCheck"
                  className="
                    group inline-flex items-center justify-between gap-5
                    rounded-full bg-black/80 hover:bg-black
                    px-6 py-3 text-sm md:text-base font-semibold text-white
                    border border-white/10
                    min-w-60
                    transition
                  "
                >
                  Solicitar demonstração
                  <span
                    className="
                      h-9 w-9 rounded-full bg-white/15
                      grid place-items-center
                      group-hover:bg-white/20 transition
                    "
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                </a>

                <a
                  href="mailto:contato@seudominio.com?subject=Conhecer%20o%20projeto%20-%20RefCheck"
                  className="
                    group inline-flex items-center justify-between gap-5
                    rounded-full bg-black/80 hover:bg-black
                    px-6 py-3 text-sm md:text-base font-semibold text-white
                    border border-white/10
                    min-w-60
                    transition
                  "
                >
                  Conhecer o projeto
                  <span
                    className="
                      h-9 w-9 rounded-full bg-white/15
                      grid place-items-center
                      group-hover:bg-white/20 transition
                    "
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                </a>
              </div>
            </div>

            {/* Espaço visual (opcional) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-2xl  p-6 ">
                <p className="text-white/90 font-semibold">Entre em contato para:</p>
                <ul className="mt-4 space-y-3 text-white/85">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                    Conhecer o projeto
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                    Solicitar uma demonstração
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                    Participar da evolução do RefCheck
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
