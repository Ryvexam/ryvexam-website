import React from 'react';

interface AboutSectionProps {
  aboutSections: Array<{
    icon: React.ReactNode;
    title: string;
    content: string;
  }>;
  sectionId?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutSections, sectionId }) => {
  return (
    <section id={sectionId} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-400">À Propos</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aboutSections.map((section, index) => (
              <div key={index} className="bg-white/5 p-4 sm:p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="font-bold text-blue-400">{section.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-4 sm:p-6 rounded-lg mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4">À propos de moi</h3>
            <div className="space-y-4 text-sm sm:text-base text-gray-300">
              <p className="leading-relaxed">
                Passionné par l'informatique depuis mon plus jeune âge, j'ai développé une expertise polyvalente alliant 
                développement web, automatisation Python, et cybersécurité. Mon parcours chez Michelin m'a permis de 
                perfectionner mes compétences en développement Python et d'automatisation avec Streamlit, tandis que mon 
                expérience en administration système m'a donné une vision globale de l'infrastructure IT.
              </p>
              <p className="leading-relaxed">
                Actuellement en poste chez Michelin dans l'équipe SecByDesign, je combine mes compétences techniques 
                avec une vision stratégique de la sécurité. En parallèle, je prépare un titre de Manager de Projet Informatique 
                pour renforcer mes compétences en gestion de projet. Je suis particulièrement intéressé par les technologies 
                qui allient innovation, performance et sécurité - comme le démontre mon projet Qroissantage.fr axé sur la 
                sensibilisation à la cybersécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
