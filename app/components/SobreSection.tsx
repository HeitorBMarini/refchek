"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Card({
  title,
  children,
  index = 0,
}: {
  title: string;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-white/80">{children}</div>
    </motion.div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
      <span className="text-white/85">{text}</span>
    </li>
  );
}

function ImgCard({
  src,
  alt,
  className = "",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition duration-300 group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <span className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />
    </div>
  );
}

export default function SobreSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 scroll-mt-28">
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho + Imagens (lado a lado no desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-12 items-start"
        >
          {/* Texto */}
          <div className="lg:col-span-7">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              Sobre o RefCheck
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              Treine decisões sob pressão real de jogo com{" "}
              <span className="text-primary">Realidade Virtual</span>.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base md:text-lg text-white/80 leading-relaxed"
            >
              RefCheck é um sistema de treinamento em Realidade Virtual que prepara
              árbitros de futebol para tomar decisões corretas sob pressão real de jogo.
            </motion.p>

            {/* Chips / destaques */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {[
                "Treinamento imersivo",
                "Situações reais de partida",
                "Foco total em tomada de decisão",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:contatorefcheck@gmail.com"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Solicitar demonstração
              </a>

            </motion.div>
          </div>

          {/* Mosaico de imagens */}
          <motion.div variants={stagger} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={fadeUp} custom={0} className="relative">
                <ImgCard
                  src="/imagens/galeria/galeria-1.png"
                  alt="RefCheck - treinamento imersivo"
                  className="aspect-4/5"
                  priority
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="relative">
                <ImgCard
                  src="/imagens/galeria/galeria-2.png"
                  alt="RefCheck - situações reais de jogo"
                  className="aspect-4/5"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="relative col-span-2">
                <ImgCard
                  src="/imagens/galeria/galeria-7.png"
                  alt="RefCheck - tomada de decisão"
                  className="aspect-16/7"
                />
              </motion.div>
            </div>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-4 text-xs text-white/60 leading-relaxed"
            >
              Imagens ilustrativas da experiência RefCheck (VR, análise e cenários de jogo).
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Grid principal (Problema + Solução) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mt-14 grid gap-6 lg:grid-cols-12"
        >
          {/* Problema */}
          <motion.div variants={fadeUp} className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur h-full">
              <p className="text-xs font-semibold tracking-wide text-white/70">
                O PROBLEMA
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                A arbitragem decide o jogo — e o erro custa caro
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white">Durante uma partida:</p>
                  <ul className="mt-3 space-y-3 text-sm">
                    <Bullet text="Analisar lances complexos em segundos" />
                    <Bullet text="Decidir sob pressão de atletas, torcida e comissão técnica" />
                    <Bullet text="Manter consistência ao longo de 90 minutos" />
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">Treino tradicional falha em:</p>
                  <ul className="mt-3 space-y-3 text-sm">
                    <Bullet text="Simular a velocidade do jogo" />
                    <Bullet text="Reproduzir a pressão emocional" />
                    <Bullet text="Repetir cenários críticos com fidelidade" />
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/85">
                Resultado: decisões erradas que impactam jogos, campeonatos e carreiras.
              </div>
            </div>
          </motion.div>

          {/* Solução (Cards) */}
          <motion.div variants={stagger} className="lg:col-span-6 grid gap-6">
            <Card title="A Solução" index={0}>
              O RefCheck utiliza Realidade Virtual (VR) para colocar o árbitro dentro do jogo.
              Em vez de apenas assistir vídeos ou analisar lances estáticos, o árbitro vivencia
              situações reais em 360° e toma decisões em tempo real.
            </Card>

            <Card title="O que muda na prática" index={1}>
              Treina leitura de jogo, posicionamento e julgamento com repetição segura e controlada —
              e aprende com feedback estruturado após cada cenário.
            </Card>

            <Card title="Por que funciona" index={2}>
              Um ambiente imersivo e repetível permite evoluir consistência, reduzir erros sob pressão
              e acelerar a curva de aprendizado.
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
