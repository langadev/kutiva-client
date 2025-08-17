// components/Footer.tsx
"use client";
import { FiDatabase } from "react-icons/fi";
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 border-t border-gray-800 text-gray-400"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <FiDatabase className="text-indigo-500 text-2xl mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                KUTIVA
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              O portal oficial de dados abertos de Moçambique. Promovendo transparência e inovação através do acesso à informação pública.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FiGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FiTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/datasets" className="hover:text-indigo-400 transition-colors">
                  Conjuntos de Dados
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-indigo-400 transition-colors">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-indigo-400 transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contactos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-2 flex-shrink-0 text-indigo-400" />
                <a href="mailto:info@kutiva.gov.mz" className="hover:text-indigo-400 transition-colors">
                  info@kutiva.gov.mz
                </a>
              </li>
              <li className="flex items-start">
                <FiGlobe className="mt-1 mr-2 flex-shrink-0 text-indigo-400" />
                <a href="https://www.kutiva.gov.mz" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  www.kutiva.gov.mz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} KUTIVA - Portal de Dados Abertos. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="hover:text-indigo-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors">
              Termos de Serviço
            </Link>
            <Link href="/accessibility" className="hover:text-indigo-400 transition-colors">
              Acessibilidade
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;