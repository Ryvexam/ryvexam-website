import React from 'react';

interface SkillsProps {
  skillCategories: Array<{
    icon: React.ReactNode;
    title: string;
    skills: Array<{
      name: string;
      level: number;
    }>;
  }>;
}

const SkillsSection: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-400">Compétences</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 p-4 sm:p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                {category.icon}
                <h3 className="font-bold text-blue-400">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-blue-400 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
