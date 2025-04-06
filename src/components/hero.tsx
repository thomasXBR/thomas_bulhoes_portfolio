"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-24 w-full">
        {/* IMAGE on the LEFT */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#181818]">
            <Image
              src="/images/pfp_portfolio2.jpg"
              alt="Foto de Thomas"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* TEXT on the RIGHT */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Olá, me chamo</span>
          </h1>
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
          <TypeAnimation
            sequence={[
            'Thomas',
            1000,
            'Barbosa',
            1000,
            'Bulhões',
            1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}/>
          </h1>
          <div>
            <h1 className="text-2xl text-[#121212]"> .</h1>
        </div>
          <div>
            <Link
            href="https://www.linkedin.com/in/thomas-bulhões-336146352/"
            target="_blank"
            className="ml-10 rounded-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold text-4xl px-10 py-5 text-center me-2 mb-2 sm-w-fit"
              >LinkedIn</Link>
            <Link
            href="https://github.com/thomasXBR/thomas_bulhoes_portfolio"
            target="_blank"
            className="ml-3 rounded-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold text-4xl px-10 py-5 text-center me-2 mb-2 sm-w-fit">
              GitHub</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;