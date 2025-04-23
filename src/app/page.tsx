import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/aboutme";
import Projetos from "@/components/projetos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900 container mx-auto px-12 py-8">
      <Navbar/> {/* NAVBAR */}
      <Hero/> {/* HERO */}
      <AboutSection/> {/* SOBRE MIM */}
      <Projetos/> {/* MEUS PROJETOS */}
      <Footer/> {/* RODAPÉ */}
    </main>
  );
}
