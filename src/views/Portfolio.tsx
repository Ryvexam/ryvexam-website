import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Database,
  Server,
  Award,
  GraduationCap,
  RollerCoaster,
  Network,
  FolderKanban,
  Briefcase,
  GraduationCap as Education,
  Code2,
  Terminal,
  Globe,
  Cpu,
  Shield,
  Globe2,
  BookOpen 
} from 'lucide-react';

// Import des composants
import HeroSection from '../components/portfolio/HeroSection';
import QuoteSection from '../components/portfolio/QuoteSection';
import AboutSection from '../components/portfolio/AboutSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import CertificationsSection from '../components/portfolio/CertificationsSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';
import Link from 'next/link';

// Import portfolio data
import portfolioData from '../data/portfolioData.json';

const Portfolio = () => {
  // Function to render icons based on iconType string
  const getIconComponent = (iconType: string, size: number = 24, className: string = "text-blue-400") => {
    const icons: { [key: string]: React.ReactNode } = {
      Github: <Github className={className} size={size} />,
      Linkedin: <Linkedin className={className} size={size} />,
      Mail: <Mail className={className} size={size} />,
      MapPin: <MapPin className={className} size={size} />,
      Code: <Code className={className} size={size} />,
      Database: <Database className={className} size={size} />,
      Server: <Server className={className} size={size} />,
      Award: <Award className={className} size={size} />,
      GraduationCap: <GraduationCap className={className} size={size} />,
      RollerCoaster: <RollerCoaster className={className} size={size} />,
      Network: <Network className={className} size={size} />,
      FolderKanban: <FolderKanban className={className} size={size} />,
      Briefcase: <Briefcase className={className} size={size} />,
      Education: <Education className={className} size={size} />,
      Code2: <Code2 className={className} size={size} />,
      Terminal: <Terminal className={className} size={size} />,
      Globe: <Globe className={className} size={size} />,
      Cpu: <Cpu className={className} size={size} />,
      Shield: <Shield className={className} size={size} />,
      Globe2: <Globe2 className={className} size={size} />,
      BookOpen: <BookOpen className={className} size={size} />
    };
    
    return icons[iconType] || null;
  };

  // Process data from JSON to include React components
  const socialLinks = portfolioData.socialLinks;
  
  const aboutSections = portfolioData.aboutSections.map(section => ({
    ...section,
    icon: getIconComponent(section.iconType)
  }));
  
  const skillCategories = portfolioData.skillCategories.map(category => ({
    ...category,
    icon: getIconComponent(category.iconType)
  }));
  
  const contactInfo = portfolioData.contactInfo.map(contact => ({
    ...contact,
    icon: getIconComponent(contact.iconType)
  }));
  
  const experiences = portfolioData.experiences.map(experience => ({
    ...experience,
    icon: getIconComponent(experience.iconType, 22)
  }));
  
  const certifications = portfolioData.certifications.map(certification => ({
    ...certification,
    icon: getIconComponent(certification.iconType)
  }));
  
  const projects = portfolioData.projects.map(project => ({
    ...project,
    icon: getIconComponent(project.iconType)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative" id="top">
        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-50 bg-gray-950/70 backdrop-blur border-b border-blue-950/50">
          <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-sm">
            <Link href="/" className="text-blue-300 font-semibold">Maxime VÉRY</Link>
            <div className="hidden md:flex gap-4 text-blue-200">
              <a href="#about" className="hover:text-blue-100">À propos</a>
              <a href="#experience" className="hover:text-blue-100">Expérience</a>
              <a href="#skills" className="hover:text-blue-100">Compétences</a>
              <a href="#projects" className="hover:text-blue-100">Projets</a>
              <a href="#certifications" className="hover:text-blue-100">Certifs</a>
              <a href="#contact" className="hover:text-blue-100">Contact</a>
              <Link href="/scripts" className="hover:text-blue-100">Scripts</Link>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <HeroSection 
          name={portfolioData.heroInfo.name}
          title={portfolioData.heroInfo.title}
          location={portfolioData.heroInfo.location}
          profileImage={portfolioData.heroInfo.profileImage}
          socialLinks={socialLinks}
        />

        {/* Quote Section */}
        <QuoteSection 
          quote={portfolioData.quote.text}
          highlight={portfolioData.quote.highlight}
          author={portfolioData.quote.author}
        />
        
        {/* Container for all sections */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* About Section */}
          <AboutSection sectionId="about" aboutSections={aboutSections} />
          
          {/* Experience Section */}
          <ExperienceSection sectionId="experience" experiences={experiences} />
          
          {/* Skills Section */}
          <SkillsSection sectionId="skills" skillCategories={skillCategories} />
          
          {/* Projects Section */}
          <ProjectsSection sectionId="projects" projects={projects} />
          
          {/* Certifications Section */}
          <CertificationsSection sectionId="certifications" certifications={certifications} />
          
          {/* Contact Section */}
          <ContactSection sectionId="contact" contactInfo={contactInfo} />
        </div>

        {/* Footer */}
        <Footer socialLinks={socialLinks} name={portfolioData.heroInfo.name} />

        {/* Back to Top */}
        <a
          href="#top"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-blue-900/40"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>
    </div>
  );
};

export default Portfolio;


