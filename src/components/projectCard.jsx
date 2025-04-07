import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, url }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#111111] border border-gray-800 hover:scale-[1.02] transition-all duration-300">
      <div
        className="h-60 md:h-72 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-start">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
              <EyeIcon className="h-5 w-5" />
              Ver projeto
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
