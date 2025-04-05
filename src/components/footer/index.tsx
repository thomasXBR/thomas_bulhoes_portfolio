import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <nav className="flex space-x-4 my-4 md:my-0">
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
          <Link href="/privacidade" className="hover:underline">Privacidade</Link>
        </nav>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
