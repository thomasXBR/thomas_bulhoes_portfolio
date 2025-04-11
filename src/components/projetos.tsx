"use client";
import React from "react";
import Image from "next/image";


{/* GRID COM TODOS OS MEUS PROJETOS COM SEUS RESPECTIVOS REPOSITÓRIOS DO GITHUB */}
const projects = [
  {
    title: "Calculadora Trigonométrica",
    image: "/images/triangulo_retangulo.png",
    description:
      "Calculadora feita com HTML, CSS e JavaScript, que realiza cálculos com seno, cosseno, tangente e mais.",
    techs: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/thomasXBR/My-repository",
  },
  {
    title: "Aplicativo da NX25",
    image: "/images/nx-case-2.jpg",
    description:
      "Aplicativo desenvolvido para a feira de empregos Networking Experience 25 utilizando o Flutterflow.",
    techs: ["Flutterflow", "Firebase"],
    url: "https://github.com/thomasXBR/My-repository",
  },
  {
    title: "Powerlini Coqueiros",
    image: "/images/powerlini.jpeg",
    description:
      "Projeto de website particular desenvolvido para a Powerlini Coqueiros. Nele é possível cadastrar projetos, trainees e gerenciar custos.",
    techs: ["HTML", "CSS", "Python", "Django", "SQL"],
    url: "https://github.com/thomasXBR/powerlini_coqueiros",
  },
  {
    title: "Portfólio Pessoal",
    image: "/images/bulhoes.png",
    description:
      "Este website é atualmente o meu quarto projeto e ele utiliza as tecnologias mais modernas e otimizadas de desenvolvimento web (listadas abaixo).",
    techs: ["HTML", "CSS", "JavaScript", "Next", "Node", "React", "Tailwind"],
    url: "https://github.com/thomasXBR/portfolio",
  },
  {
    title: "Sistema Operacional com Python",
    image: "/images/PyOS_logo.jpg",
    description:
      "Aplicação que simula um sistema operacional em Python.",
    techs: ["Python", "Tkinter"],
    url: "https://github.com/thomasXBR/pyOS",
  },
];

{/* ORGANIZA COMO FICA ESTRUTURADO O CÓDIGO */}
const MeusProjetos = () => {
  return (
    <section id="meusprojetos" className="bg-[#0F172A] text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Meus Projetos</h2>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E293B] rounded-2xl shadow-lg p-4 hover:shadow-pink-500/30 transition duration-300 block max-w-sm w-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-500/10 text-pink-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeusProjetos;
