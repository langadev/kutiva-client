"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiDownload, FiSearch, FiCalendar, FiDatabase, FiChevronDown, FiExternalLink } from 'react-icons/fi';

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
  source?: string;
  tags?: string[];
}

const DatasetList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [expandedDataset, setExpandedDataset] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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
      license: 'CC BY 4.0',
      source: 'Ministério do Comércio',
      tags: ['comércio', 'vendas', 'regional']
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
      license: 'MIT',
      source: 'INE - Instituto Nacional de Estatística',
      tags: ['população', 'censo', 'demografia']
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
      license: 'Interno',
      tags: ['sistema', 'acesso', 'logs']
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
      license: 'Confidencial',
      source: 'Departamento Financeiro',
      tags: ['financeiro', 'indicadores', 'KPI']
    },
  ];



  const categories = ['Todos', ...new Set(datasets.map(ds => ds.category))];

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch =
      dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dataset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || dataset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredDatasets.length / itemsPerPage);
  const paginatedDatasets = filteredDatasets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDownload = (datasetId: string) => {
    console.log(`Iniciando download do dataset ${datasetId}`);
  };

  const toggleExpand = (datasetId: string) => {
    setExpandedDataset(expandedDataset === datasetId ? null : datasetId);
  };

  // Framer Motion variants tipados
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div id="datasets" className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Banco de Dados Disponíveis</h2>
        <p className="text-gray-300">Explore e faça download dos nossos conjuntos de dados</p>
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar datasets..."
              className="pl-10 pr-4 py-3 w-full border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <motion.div className="flex flex-wrap gap-3 mt-4" variants={containerVariants} initial="hidden" animate="visible">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${selectedCategory === category
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Dataset list */}
      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
        <AnimatePresence>
          {paginatedDatasets.length > 0 ? (
            paginatedDatasets.map(dataset => (
              <motion.div
                key={dataset.id}
                variants={itemVariants}
                layout
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-indigo-500/30 transition-colors"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <FiDatabase className="text-indigo-500 flex-shrink-0" />
                        <h3 className="text-xl font-semibold text-white">{dataset.title}</h3>
                        <span className="bg-indigo-100/20 text-indigo-300 text-xs px-3 py-1 rounded-full">
                          {dataset.category}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{dataset.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="text-indigo-400" />
                          <span>Atualizado: {dataset.lastUpdated}</span>
                        </div>
                        <div>Tamanho: {dataset.size}</div>
                        <div>Downloads: {dataset.downloads.toLocaleString()}</div>
                        <div>Formato: {dataset.format}</div>
                        <div>Licença: {dataset.license}</div>
                      </div>

                      {dataset.tags && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {dataset.tags.map(tag => (
                            <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 min-w-fit">
                      <motion.button
                        onClick={() => handleDownload(dataset.id)}
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiDownload />
                        Baixar
                      </motion.button>

                      <button
                        onClick={() => toggleExpand(dataset.id)}
                        className="flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm"
                      >
                        {expandedDataset === dataset.id ? 'Menos detalhes' : 'Mais detalhes'}
                        <FiChevronDown className={`transition-transform ${expandedDataset === dataset.id ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedDataset === dataset.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-200 mb-2">Metadados</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                              <li className="flex gap-2">
                                <span className="text-gray-500">ID:</span>
                                <span>{dataset.id}</span>
                              </li>
                              {dataset.source && (
                                <li className="flex gap-2">
                                  <span className="text-gray-500">Fonte:</span>
                                  <span>{dataset.source}</span>
                                </li>
                              )}
                              <li className="flex gap-2">
                                <span className="text-gray-500">Formato:</span>
                                <span className="text-indigo-400">{dataset.format}</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-gray-500">Licença:</span>
                                <span>{dataset.license}</span>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-200 mb-2">Ações</h4>
                            <div className="flex flex-wrap gap-3">
                              <button className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors">
                                <FiExternalLink />
                                Visualizar
                              </button>
                              <button className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors">
                                <FiDownload />
                                Metadados
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="bg-gray-800 rounded-xl shadow-lg p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400">Nenhum dataset encontrado com os critérios selecionados</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="px-3 py-1 border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700"
              >
                Limpar filtros
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pagination */}
      {filteredDatasets.length > itemsPerPage && (
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <nav className="inline-flex rounded-md shadow-lg overflow-hidden">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-4 py-2 border-l border-r border-gray-700 ${
                  currentPage === idx + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próxima
            </button>
          </nav>
        </motion.div>
      )}

      
    </div>
  );
};

export default DatasetList;
