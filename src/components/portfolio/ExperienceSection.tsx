import React from 'react';

interface ExperienceProps {
  experiences: Array<{
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description?: string;
    missions?: string[];
    techStack?: {
      title: string;
      details: string[];
    };
    details?: string[];
    location?: string;
    workType?: string;
    additionalInfo?: string;
    icon: React.ReactNode;
  }>;
  sectionId?: string;
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences, sectionId }) => {
  return (
    <section id={sectionId} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-400">Expérience</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
        <div className="space-y-6 sm:space-y-8 pt-4">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 sm:pl-6 relative mt-2">
              <div className="absolute -left-4 -top-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                {exp.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400">{exp.title}</h3>
              <div className="text-sm sm:text-base text-blue-200 mb-2">{exp.company} • {exp.startDate} - {exp.endDate}</div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg mt-2">
                {exp.description && <p className="text-sm sm:text-base text-gray-300 mb-3">{exp.description}</p>}
                
                {exp.missions && (
                  <div className="mt-3">
                    <h4 className="text-sm sm:text-base text-blue-300 font-semibold mb-2">Missions :</h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1">
                      {exp.missions.map((mission, idx) => (
                        <li key={idx}>{mission}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.techStack && (
                  <div className="mt-3">
                    <h4 className="text-sm sm:text-base text-blue-300 font-semibold">{exp.techStack.title}</h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1">
                      {exp.techStack.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.details && (
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
