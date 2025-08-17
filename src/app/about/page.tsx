import React from 'react';
import { FiUsers, FiDatabase, FiGlobe, FiAward, FiHeart } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre o Portal de Dados de Moçambique
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Democratizando o acesso a dados públicos para impulsionar a transparência e o desenvolvimento
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Creator */}
        <section className="mb-16 bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:flex items-center gap-8">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-indigo-600 rounded-full w-40 h-40 flex items-center justify-center">
                <FiUsers className="text-white text-5xl" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-white mb-4">Criador do Projeto</h2>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-white">Herco Zauzau</span> é o idealizador e mantenedor principal desta iniciativa.
              </p>
              <p className="text-gray-300">
                Acredito que o acesso livre a dados públicos de qualidade é fundamental para o desenvolvimento sustentável de Moçambique e para a capacitação dos cidadãos.
              </p>
            </div>
          </div>
        </section>

        {/* Contributors Section */}
<section className="mt-16 mb-16">
  <h2 className="text-3xl font-bold text-center mb-8">Contribuidores</h2>
  <div className="flex flex-wrap justify-center gap-6">
    {[
      "Alfredo Langa",
      "Pinto Armando Macuacua",
      "Fernando Gomes",
      "Simão Rafique"
    ].map((contributor) => (
      <div
        key={contributor}
        className="bg-gray-800 rounded-xl shadow-md px-6 py-4 text-white font-medium hover:bg-indigo-700 transition-colors"
      >
        {contributor}
      </div>
    ))}
  </div>
</section>


        {/* Project Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre o Repositório</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <FiDatabase className="text-green-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Dados Públicos de Moçambique</h3>
              <p className="text-gray-300">
                Este repositório alberga uma coleção crescente de dados públicos moçambicanos, cobrindo diversos tópicos como economia, saúde, educação e demografia.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <FiGlobe className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fontes Confiáveis</h3>
              <p className="text-gray-300">
                Os dados provêm de fontes verificadas incluindo agências governamentais, organizações internacionais, instituições de pesquisa e ONGs atuantes em Moçambique.
              </p>
            </div>
          </div>
        </section>

        {/* Values and Note */}
        <section className="bg-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Nossa Filosofia</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <FiAward className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Ética de Código Aberto</h3>
                <p className="text-gray-300 text-sm">
                  Todo o projeto é desenvolvido com transparência e disponibilizado gratuitamente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiHeart className="text-red-400 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Mantido por Voluntários</h3>
                <p className="text-gray-300 text-sm">
                  Uma equipe dedicada trabalha voluntariamente para manter e atualizar os dados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-indigo-400 text-2xl mt-1">!</div>
              <div>
                <h3 className="font-semibold mb-2">Nota Importante</h3>
                <p className="text-gray-300 text-sm">
                  Embora nos esforcemos pela precisão, recomendamos verificar os dados em múltiplas fontes antes de tomar decisões críticas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Junte-se a Nós</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Este é um projeto colaborativo. Se deseja contribuir com dados, análises ou desenvolvimento, entre em contato.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Quero Contribuir
          </button>
        </section>
      </main>
    </div>
  );
}
