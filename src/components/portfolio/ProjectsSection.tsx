import React from 'react';

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectsProps {
  projects: Array<{
    title: string;
    description: string;
    image: string;
    tags?: string[];
    link?: string;
    links?: ProjectLink[];
    icon: React.ReactNode;
  }>;
  sectionId?: string;
}

import Image from 'next/image';

const ProjectsSection: React.FC<ProjectsProps> = ({ projects, sectionId }) => {
  return (
    <section id={sectionId} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-400">Projets</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative bg-gray-100/80 flex items-center justify-center p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute top-0 right-0 m-2 p-2 bg-black/50 rounded-full">
                  {project.icon}
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-900/30 text-blue-200 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6 pt-0">
                {project.links ? (
                  <div className="flex flex-col gap-2">
                    {project.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm w-full text-center"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                ) : project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm w-full text-center"
                  >
                    Visiter le site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
