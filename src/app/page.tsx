import Image from "next/image";
import Footer from "@/components";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/aboutme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900 container mx-auto px-12 py-8">
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Footer/>
    </main>
  );
}
