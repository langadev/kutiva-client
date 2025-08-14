"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categoria", path: "/category" },
    { name: "Sobre", path: "/about" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.path}
        href={link.path}
        className={`${
          isMobile
            ? "block px-3 py-2 rounded-md text-base font-medium"
            : "px-3 py-2 rounded-md text-sm font-medium"
        } ${
          pathname === link.path
            ? "text-indigo-400 bg-gray-800"
            : "text-gray-300 hover:text-indigo-400 hover:bg-gray-800"
        } transition-colors duration-200`}
      >
        {link.name}
      </Link>
    ));

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-md py-2" : "bg-gray-900/90 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-indigo-600">

            Kutiva </Link>
          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {renderLinks()}
            
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Abrir menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-indigo-400 hover:bg-gray-800 transition-colors duration-200"
          >
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-gray-900 shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">{renderLinks(true)}</div>
        <div className="px-2 pb-3">
          <Link
            href="/login"
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            Acessar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
