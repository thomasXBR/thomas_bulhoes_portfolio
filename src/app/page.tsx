import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#121212] container mx-auto px-12 py-8">
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  );
}
