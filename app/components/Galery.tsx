"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type GalleryItem = {
  id: string;
  title: string;
  src: string;
};

export default function GallerySection() {
  const items: GalleryItem[] = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: String(i + 1),
        title: `RefCheck • Galeria ${i + 1}`,
        src: `/imagens/galeria/galeria-${i + 1}.png`,
      })),
    [],
  );

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox='galeria']", {
      Carousel: { Thumbs: false },
    });

    return () => {
      NativeFancybox.unbind("[data-fancybox='galeria']");
      NativeFancybox.close();
    };
  }, []);

  // Para centralizar as 2 últimas em um grid de 4 col:
  // quando sobram 2, colocamos a 1ª delas começando na coluna 2 (col-start-2),
  // assim elas ficam alinhadas no centro (col 2 e 3).
  const remainder = items.length % 4;
  const hasTwoCentered = remainder === 2;

  return (
    <section id="galeria-section" className="relative py-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Galeria
          </motion.p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Momentos do <span className="text-primary">RefCheck</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Explore registros de treinos, cenários e experiências que mostram a
            imersão do RefCheck no futebol real.
          </p>
        </div>

        {/* GRID 4x4 */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, idx) => {
            const isFirstOfLastTwo = hasTwoCentered && idx === items.length - 2;

            return (
              <a
                key={it.id}
                href={it.src}
                data-fancybox="galeria"
                data-caption={it.title}
                title={it.title}
                className={[
                  "group relative overflow-hidden rounded-2xl bg-white/5",
                  "aspect-square", // mantém todos padronizados (pode trocar)
                  isFirstOfLastTwo ? "lg:col-start-2" : "",
                ].join(" ")}
              >
                <Image
                  src={it.src}
                  alt={it.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                <span className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition" />

                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="h-12 w-12 rounded-full flex items-center justify-center bg-black/35 border border-white/10">
                    <Search className="text-white" size={22} />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
