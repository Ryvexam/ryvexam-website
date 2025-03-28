import React from 'react';
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  location: string;
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  name, 
  title, 
  location, 
  profileImage,
  socialLinks 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center">
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 animate-spin-slow bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
          <img
            src={profileImage}
            alt={name}
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-white shadow-lg relative z-10"
          />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {name}
        </h1>
        <h2 className="text-xl sm:text-2xl mb-6 text-blue-200 px-4">{title}</h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin size={20} className="text-blue-400"/>
          <span className="text-sm sm:text-base">{location}</span>
        </div>
        <div className="flex justify-center gap-4 sm:gap-6">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
            <div className="bg-white/10 p-2 sm:p-3 rounded-full hover:bg-white/20">
              <Github size={20} className="sm:w-6 sm:h-6"/>
            </div>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
            <div className="bg-white/10 p-2 sm:p-3 rounded-full hover:bg-white/20">
              <Linkedin size={20} className="sm:w-6 sm:h-6"/>
            </div>
          </a>
          <a href={`mailto:${socialLinks.email}`} className="transform hover:scale-110 transition-transform">
            <div className="bg-white/10 p-2 sm:p-3 rounded-full hover:bg-white/20">
              <Mail size={20} className="sm:w-6 sm:h-6"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
