import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import DatasetList from '@/components/DatasetList';

export default function Page() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <DatasetList />
      </main>
    </div>
  );
}
