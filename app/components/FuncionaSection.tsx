"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { Headset, Gauge, Repeat2, Focus, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: easeOut },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const steps = [
  {
    n: "01",
    title: "Imersão total",
    desc: "O árbitro entra no ambiente virtual e assume sua posição em campo.",
  },
  {
    n: "02",
    title: "Situações de jogo",
    desc: "Faltas, impedimentos, pênaltis, disputas, jogadas rápidas e lances duvidosos.",
  },
  {
    n: "03",
    title: "Tomada de decisão",
    desc: "O árbitro decide como faria em uma partida real.",
  },
  {
    n: "04",
    title: "Análise e aprendizado",
    desc: "O sistema registra decisões e gera dados para avaliação técnica e evolução contínua.",
  },
];

const diffsCards = [
  {
    title: "Imersão completa em VR",
    desc: "O árbitro treina dentro do jogo, com percepção real de campo e contexto.",
    Icon: Headset,
  },
  {
    title: "Situações reais de partida",
    desc: "Cenários com lances críticos para treinar leitura, posicionamento e timing.",
    Icon: Gauge,
  },
  {
    title: "Repetição ilimitada",
    desc: "Treino consistente com repetição de lances até consolidar a tomada de decisão.",
    Icon: Repeat2,
  },
  {
    title: "Decisão sob pressão",
    desc: "Foco total em julgamento e consistência com pressão simulada de jogo.",
    Icon: Focus,
  },
  {
    title: "Tecnologia no esporte",
    desc: "Feedback estruturado e dados para evolução técnica contínua.",
    Icon: Cpu,
  },
];

const audiences = [
  "Árbitros profissionais e em formação",
  "Federações e confederações",
  "Centros de treinamento e escolas de arbitragem",
  "Projetos de formação e capacitação técnica",
];

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div variants={stagger} className="max-w-3xl">
      <motion.p
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80"
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
        {kicker}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight"
      >
        {title}
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-4 text-white/80 md:text-lg">
        {subtitle}
      </motion.p>
    </motion.div>
  );
}

export default function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden py-20 "
    >
      {/* glows */}
      <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionTitle
            kicker="Como Funciona"
            title="Da simulação à evolução real"
            subtitle="Um fluxo simples, imersivo e repetível — do campo virtual ao desenvolvimento técnico consistente."
          />

          {/* 1) STEPS (sozinho) */}
          <motion.div
            variants={stagger}
            className="mt-12"
          >
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
              <div className="absolute left-8 top-8 bottom-8 w-px bg-white/10 hidden sm:block" />

              <div className="space-y-6">
                {steps.map((s, idx) => (
                  <motion.div
                    key={s.n}
                    variants={fadeUp}
                    custom={idx}
                    className="relative flex gap-4 sm:gap-6"
                  >
                    <div className="hidden sm:flex w-8 items-start justify-center">
                      <span className="mt-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(26,71,94,0.25)]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-wider text-white/60">
                          {s.n}
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm md:text-base text-white/80 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 2) DIFERENCIAL (abaixo do steps) */}
          <motion.div variants={stagger} className="mt-6">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur"
            >
              <p className="text-xs font-semibold tracking-wide text-white/70">
                DIFERENCIAL REFCHECK
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Muito além do vídeo
              </h3>
              <p className="mt-3 text-white/80">
                Experiência real de arbitragem em VR, com foco em decisão.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {diffsCards.map(({ title, desc, Icon }, idx) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    custom={idx}
                    className="
                      rounded-2xl border border-white/10
                      bg-white/5 p-6 backdrop:backdrop-blur-2xl
                      hover:bg-white/10 transition
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div className="md:h-10 md:w-10 h-12 w-18 rounded-xl bg-primary/20 border border-white/10 flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white leading-snug">
                          {title}
                        </p>
                        <p className="mt-1 text-xs text-white/70 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-white/90 md:w-90 w-full md:text-start text-center">
                <p className="font-semibold">O RefCheck não ensina apenas regras.</p>
                <p className="text-white/80">Ele treina decisões.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3) SOMENTE AQUI EM GRID DE 2: PARA QUEM É + ESTÁGIO */}
          <motion.div variants={stagger} className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Para quem é */}
            <motion.div variants={fadeUp}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur h-full">
                <p className="text-xs font-semibold tracking-wide text-white/70">
                  PARA QUEM É O REFCHECK
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Desenvolvido para quem forma e evolui árbitros
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {audiences.map((a, idx) => (
                    <motion.div
                      key={a}
                      variants={fadeUp}
                      custom={idx}
                      className="rounded-xl border border-white/10 bg-black/20 p-4 text-white/85"
                    >
                      {a}
                    </motion.div>
                  ))}
                </div>

                <p className="mt-6 text-white/80">
                  Uma ferramenta moderna para elevar o nível da arbitragem.
                </p>
              </div>
            </motion.div>

            {/* Estágio */}
            <motion.div variants={fadeUp}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur h-full">
                <p className="text-xs font-semibold tracking-wide text-white/70">
                  ESTÁGIO DO PROJETO
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Em desenvolvimento, com base sólida
                </h3>
                <p className="mt-3 text-white/80">
                  O RefCheck está em fase de protótipo, com a versão final em desenvolvimento.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/85">
                  {[
                    "Evoluir a plataforma com feedback real do mercado",
                    "Adaptar cenários às necessidades das federações",
                    "Construir uma solução alinhada ao futebol moderno",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Fechamento */}
          <motion.div variants={fadeUp} className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-8 md:p-10 backdrop-blur">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                O Futuro da Arbitragem Começa no Treinamento
              </h3>
              <p className="mt-3 text-white/80 md:text-lg">
                Tecnologia, imersão e decisão no centro do jogo. O futebol evoluiu.
                A arbitragem também precisa evoluir.
              </p>
              <p className="mt-3 text-white/80">
                O RefCheck nasce para ser uma ponte entre tecnologia de ponta e o futebol real.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="mailto:contatorefcheck@gmail.com"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Solicitar demonstração
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
