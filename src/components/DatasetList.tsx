// components/DatasetList.tsx
"use client";
import React, { useState } from 'react';
import { FiDownload, FiSearch, FiFilter, FiCalendar, FiDatabase } from 'react-icons/fi';

interface Dataset {
  id: string;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  size: string;
  downloads: number;
  format: string;
  license: string;
}

const DatasetList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const datasets: Dataset[] = [
    {
      id: '1',
      title: 'Vendas Mensais 2023',
      description: 'Dados completos de vendas por região e categoria de produto',
      category: 'Vendas',
      lastUpdated: '2023-11-15',
      size: '45MB',
      downloads: 1243,
      format: 'CSV',
      license: 'CC BY 4.0'
    },
    {
      id: '2',
      title: 'Dados Demográficos',
      description: 'Informações populacionais por faixa etária e gênero',
      category: 'Demografia',
      lastUpdated: '2023-10-28',
      size: '12MB',
      downloads: 892,
      format: 'JSON',
      license: 'MIT'
    },
    {
      id: '3',
      title: 'Logs de Acesso',
      description: 'Registros de acesso ao sistema no último trimestre',
      category: 'TI',
      lastUpdated: '2023-11-01',
      size: '78MB',
      downloads: 567,
      format: 'Parquet',
      license: 'Interno'
    },
    {
      id: '4',
      title: 'Indicadores Financeiros',
      description: 'KPIs financeiros mensais da organização',
      category: 'Financeiro',
      lastUpdated: '2023-11-10',
      size: '5MB',
      downloads: 1024,
      format: 'Excel',
      license: 'Confidencial'
    },
  ];

  const categories = ['Todos', ...new Set(datasets.map(ds => ds.category))];

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dataset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || dataset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (datasetId: string) => {
    console.log(`Iniciando download do dataset ${datasetId}`);
  };

  return (
    <div id='datasets' className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Banco de Dados Disponíveis</h2>
        <p className="text-gray-300">Explore e faça download dos nossos conjuntos de dados</p>
      </div>

    {/* Barra de busca e filtros */}
<div className="bg-gray-800 rounded-lg shadow p-4 mb-6">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Campo de busca */}
    <div className="relative flex-grow">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Buscar datasets..."
        className="pl-10 pr-4 py-2 w-full border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>

  {/* Botões de filtros */}
  <div className="flex flex-wrap gap-2 mt-4">
    {categories.map(category => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors
          ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-700'
          }
        `}
      >
        {category}
      </button>
    ))}
  </div>
</div>


      {/* Lista de datasets */}
      <div className="space-y-4">
        {filteredDatasets.length > 0 ? (
          filteredDatasets.map(dataset => (
            <div key={dataset.id} className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <FiDatabase className="text-indigo-500" />
                      <h3 className="text-xl font-semibold text-white">{dataset.title}</h3>
                      <span className="bg-indigo-100/20 text-indigo-300 text-xs px-2 py-1 rounded-full ml-2">
                        {dataset.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{dataset.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <FiCalendar />
                        <span>Atualizado: {dataset.lastUpdated}</span>
                      </div>
                      <div>Tamanho: {dataset.size}</div>
                      <div>Downloads: {dataset.downloads}</div>
                      <div>Formato: {dataset.format}</div>
                      <div>Licença: {dataset.license}</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(dataset.id)}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors min-w-fit"
                  >
                    <FiDownload />
                    Baixar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gray-800 rounded-lg shadow p-8 text-center">
            <p className="text-gray-400">Nenhum dataset encontrado com os critérios selecionados</p>
          </div>
        )}
      </div>

      {/* Paginação */}
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button className="px-3 py-1 rounded-l-md border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
            Anterior
          </button>
          <button className="px-3 py-1 border-t border-b border-gray-700 bg-gray-800 text-indigo-400 font-medium">
            1
          </button>
          <button className="px-3 py-1 border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
            2
          </button>
          <button className="px-3 py-1 border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
            3
          </button>
          <button className="px-3 py-1 rounded-r-md border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
            Próxima
          </button>
        </nav>
      </div>
    </div>
  );
};

export default DatasetList;
