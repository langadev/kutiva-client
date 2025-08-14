// components/HeroBanner.tsx
import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Seu Portal de{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-300">
                Dados Públicos de Moçambique
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Explore uma coleção crescente de dados públicos confiáveis de
              Moçambique, cobrindo diversos tópicos e fontes — de agências
              governamentais a organizações internacionais.
            </p>


          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg drop-shadow-2xl">
              <Image
                src="/images/3196758.jpg"
                alt="Dashboard analítico"
                width={600}
                height={500}
                className="animate-float rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-900/50 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Fontes de Dados" },
              { value: "24/7", label: "Atualização" },
              { value: "100+", label: "Visualizações" },
              { value: "10K+", label: "Consultas/Mês" },
            ].map((stat, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
