"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="extras" className="bg-[#0F172A] text-gray-400 py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Sobre</h3>
          <p className="text-sm leading-relaxed">
            Portfólio criado por <span className="text-white">Thomas Bulhões</span>, estudante de Ciência da Computação no Mackenzie e trainee de Tec na Empresa Júnior Engenharia Mackenzie (EJEM).
          </p>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#home" className="hover:text-pink-500 transition">
                Início
              </Link>
            </li>
            <li>
              <Link href="#sobremim" className="hover:text-pink-500 transition">
                Sobre mim
              </Link>
            </li>
            <li>
              <Link href="#meusprojetos" className="hover:text-pink-500 transition">
                Meus projetos
              </Link>
            </li>
            <li>
              <Link href="https://www.ejemackenzie.com.br" target="_blank" className="hover:text-pink-500 transition">
                EJEM
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Redes Sociais</h3>
          <ul className="space-y-2 text-sm">
            <li>
              {/* LINK DO LINKEDIN*/}
              <a
                href="https://www.linkedin.com/in/thomas-bulhões-336146352/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              {/* LINK DO GITHUB*/}
              <a
                href="https://github.com/thomasXBR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Thomas Bulhões. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
