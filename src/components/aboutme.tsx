"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Educação",
    id: "Educação",
    content: (
      <ul className="list-disc pl-2">
        <li>Escola: Colégio Visconde de Porto Seguro - Morumbi</li>
        <li>Faculdade: Universidade Presbiteriana Mackenzie - Higienópolis</li>
        <li>Curso: Ciência da Computação (FCI)</li>
      </ul>
    ),
  },
  {
    title: "Experiência",
    id: "Experiência",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Certificados",
    id: "Certificados",
    content: (
      <ul className="list-disc pl-2">
        <li>C1 Advanced | Cambridge English</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Educação");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Find the content for the active tab
  const activeTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me.jpeg"
          width={500}
          height={500}
          alt="Eu tocando guitarra"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Sou um programador iniciante, apaixonado por tecnologia e
            desenvolvimento de jogos. Atualmente estou aprendendo as mais
            importantes ferramentas de desenvolvimento web e de bases de dados.
            Procur sempre aprender mai e aprimorar minhas habilidades com o
            intuito de aprimorar minhas hard skills e ser um bom trabalhador.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Educação")}
              active={tab === "Educação"}
            >
              Educação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experiência")}
              active={tab === "Experiência"}
            >
              Experiência
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certificados")}
              active={tab === "Certificados"}
            >
              Certificados
            </TabButton>
          </div>
          <div className="mt-8">
            {/* Render the content of the active tab */}
            {activeTabContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;