import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pb-10">
      {/* padding em volta pra parecer flutuante */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            rounded-[28px]
            border border-white/10
            bg-black/35
            backdrop-blur
            shadow-2xl
            px-6 py-10 md:px-10 md:py-12
          "
        >
          {/* Top */}
          <div className="grid gap-10 md:grid-cols-12">
            {/* Logo + mini texto */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/imagens/logo.png"
                  alt="RefCheck"
                  width={180}
                  height={40}
                  priority
                />
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
                Treinamento em Realidade Virtual para árbitros tomarem decisões
                corretas sob pressão real de jogo.
              </p>
            </div>

            {/* Menu + Contato */}
            <div className="md:col-span-8 grid gap-10 md:grid-cols-12 items-start">
              {/* Menu (uma coluna só) */}
              <div className="md:col-span-6 flex justify-center md:justify-start">
                <ul
                  className="
                    flex flex-col items-center md:items-start
                    gap-4
                    text-sm text-white/70
                  "
                >
                  <li>
                    <a href="#sobre" className="hover:text-primary transition">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="#como-funciona" className="hover:text-primary transition">
                      Como funciona
                    </a>
                  </li>
                   <li>
                    <a href="#galeria-section" className="hover:text-primary transition">
                      Galeria
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div className="md:col-span-6 flex flex-col items-center md:items-end text-center md:text-right">
                <h4 className="text-sm font-semibold text-white">Contato</h4>

                <a
                  className="mt-3 text-sm text-white/70 hover:text-primary transition"
                  href="mailto:contatorefcheck@gmail.com"
                >
                    contatorefcheck@gmail.com

                </a>

                <p className="mt-2 text-sm text-white/60">
                  Atendimento por e-mail
                </p>

                <a
                  href="mailto:contatorefcheck@gmail.com"
                  className="
                    mt-5 inline-flex items-center justify-center
                    rounded-full bg-primary px-5 py-2.5
                    text-sm font-semibold text-white
                    hover:opacity-90 transition
                  "
                >
                  Falar com a equipe
                </a>
              </div>
            </div>
          </div>

          {/* Linha */}
          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <p className="text-xs text-white/50 text-center md:text-left">
              © {new Date().getFullYear()} RefCheck. Todos os direitos reservados.
            </p>

           
          </div>
        </div>
      </div>
    </footer>
  );
}
