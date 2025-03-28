import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  name: string;
}

const Footer: React.FC<FooterProps> = ({ socialLinks, name }) => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm py-6 sm:py-8 mt-8">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center gap-4 sm:gap-6 mb-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Github size={20} className="sm:w-6 sm:h-6"/>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} className="sm:w-6 sm:h-6"/>
          </a>
          <a href={`mailto:${socialLinks.email}`} className="hover:text-blue-400 transition-colors">
            <Mail size={20} className="sm:w-6 sm:h-6"/>
          </a>
        </div>
        <p className="text-sm text-blue-200">© {new Date().getFullYear()} {name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
