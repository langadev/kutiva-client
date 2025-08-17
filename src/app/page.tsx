import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import DatasetList from '@/components/DatasetList';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Portal de Dados Públicos de Moçambique</title>
        <meta 
          name="description" 
          content="Explore dados públicos confiáveis de Moçambique, cobrindo diversos tópicos e fontes governamentais e internacionais." 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="flex-1">
          <HeroBanner />
          <DatasetList />
        </main>
      </div>
    </>
  );
}