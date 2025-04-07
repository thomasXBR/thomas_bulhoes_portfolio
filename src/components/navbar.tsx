import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#0e1524] w-full shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo_ejem.png"
            alt="Logo da EJEM"
            width={60}
            height={60}
            className="rounded-md"
          />
          <span className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text">
            Bem-vindos ao meu Portfólio!
          </span>
        </Link>

        {/* LINKS QUE LEVAM A SEÇÕES NA PÁGINA */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#inicio"
            className="text-white hover:text-pink-500 transition duration-300 font-medium"
          >
            Início
          </a>
          <a
            href="#sobremim"
            className="text-white hover:text-pink-500 transition duration-300 font-medium"
          >
            Sobre mim
          </a>
          <a
            href="#meusprojetos"
            className="text-white hover:text-pink-500 transition duration-300 font-medium"
          >
            Meus Projetos
          </a>
          <a
            href="#extras"
            className="text-white hover:text-pink-500 transition duration-300 font-medium"
          >
            Extras
          </a>

          {/* LINK DA PÁGINA DA EJEM */}
          <a
            href="https://www.ejemackenzie.com.br"
            target="_blank"
            className="text-white hover:text-pink-500 transition duration-300 font-medium"
          >
            EJEM
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
