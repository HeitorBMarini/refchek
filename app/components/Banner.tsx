import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[96vh] min-h-150 flex items-center">
      
      {/* Imagem de fundo */}
      <Image
        src="/imagens/banner.png"
        alt="Treinamento de arbitragem em realidade virtual"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 md:max-w-10xl md:mx-40 px-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl md:text-start text-center">
          Treine decisões.  
          <br />
          Reduza erros.  
          <br />
          <span className="text-white md:text-start text-center">Evolua a arbitragem.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 md:text-start text-center">
          RefCheck é um sistema de treinamento em Realidade Virtual que prepara
          árbitros de futebol para tomar decisões corretas sob pressão real de jogo.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4 md:items-start justify-center md:justify-start">
          <a
            href="mailto:contato@seudominio.com"
            className="bg-primary hover:bg-black text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Solicitar demonstração
          </a>

          
        </div>
      </div>
    </section>
  );
}
