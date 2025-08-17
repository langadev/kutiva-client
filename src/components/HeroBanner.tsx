// components/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";
import BackgroundImage from "./BackgroundImage";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
      {/* Background elements */}
     <div className="absolute inset-0 z-10 hidden md:block">
  <BackgroundImage />
</div>

      
      <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
{/* Main content */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
  <div className="flex flex-col-reverse md:flex-row items-center gap-12">
    
    {/* Texto */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        Seu Portal de{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-300 animate-gradient">
          Dados Públicos de Moçambique
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
        Explore uma coleção crescente de dados públicos confiáveis de
        Moçambique, cobrindo diversos tópicos e fontes — de agências
        governamentais a organizações internacionais.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link
          href="#datasets"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 rounded-lg text-lg font-semibold text-center transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          aria-label="Explorar conjuntos de dados"
        >
          Explorar Dados
        </Link>
      </div>
    </div>
    
  </div>
</div>

    </section>
  );
};

export default HeroBanner;