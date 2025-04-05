import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <span className="text-lg font-semibold">Programa de Trainee 2025.1</span>
      </div>
      <div className="space-x-6">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/sobre" className="hover:underline">Sobre</Link>
        <Link href="/contato" className="hover:underline">Contato</Link>
      </div>
    </nav>
  );
};

export default Navbar;
