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
  BookOpen } from 'lucide-react';

const Portfolio = () => {
  const socialLinks = {
    github: "https://github.com/ryvexam",
    linkedin: "https://www.linkedin.com/in/maxime-very/",
    email: "maximevery@ryvexam.fr"
  };

  const aboutSections = [
    {
      icon: <Briefcase className="text-blue-400" size={24} />,
      title: "Expérience",
      content: "Python Developer chez Michelin, 2 ans d'administration système et réseau à Tertio Informatique, activité freelance en développement web, et expérience en cybersécurité avec Qroissantage.fr."
    },
    {
      icon: <Education className="text-blue-400" size={24} />,
      title: "Formation",
      content: "En préparation du titre Manager de Projet Informatique (RNCP38905), après l'obtention du titre Concepteur Développeur d'Applications (RNCP37873), BTS SIO option SISR, et Bac S spécialité ISN."
    },
    {
      icon: <Code2 className="text-blue-400" size={24} />,
      title: "Compétences Techniques",
      content: "Développement web fullstack (React, Symfony), automatisation Python, DevOps (Docker, Linux), cybersécurité, et outils d'analyse de données (PowerBI, Pandas, Streamlit)."
    }
  ];

  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Développement Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "WordPress", level: 75 },
      ]
    },
    {
      icon: <Terminal className="text-blue-400" size={24} />,
      title: "Développement Backend",
      skills: [
        { name: "PHP/Symfony", level: 80 },
        { name: "Python", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "Java", level: 65 },
        { name: "C#/.NET", level: 30 }
      ]
    },
    {
      icon: <Globe className="text-blue-400" size={24} />,
      title: "DevOps",
      skills: [
        { name: "Linux", level: 80 },
        { name: "Docker", level: 80 },
        { name: "Nginx/Apache", level: 65 },
        { name: "CI/CD", level: 60 },
        { name: "Powershell", level: 60 }
      ]
    },
    {
      icon: <Cpu className="text-blue-400" size={24} />,
      title: "Outils Business",
      skills: [
        { name: "PowerBI", level: 75 },
        { name: "PowerApps", level: 75 },
        { name: "Pandas", level: 85 },
        { name: "Streamlit", level: 90 }
      ]
    },
    {
      icon: <Shield className="text-blue-400" size={24} />,
      title: "Cybersécurité",
      skills: [
        { name: "Sensibilisation", level: 85 },
        { name: "Sécurité Web", level: 75 },
        { name: "Automatisation SecOps", level: 70 }
      ]
    },
    {
      icon: <Database className="text-blue-400" size={24} />,
      title: "Données & Intelligence Artificielle",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Git", level: 80 },
        { name: "Power Automate", level: 70 },
        { name: "Prompting avancé", level: 85 },
        { name: "Intégration d'API LLM", level: 75 },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email Professionnel",
      value: socialLinks.email,
      link: `mailto:${socialLinks.email}`,
      description: "Disponible pour discuter de projets et d'opportunités"
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      title: "LinkedIn",
      value: "Maxime VÉRY",
      link: socialLinks.linkedin,
      description: "Connectons-nous et échangeons sur LinkedIn"
    },
    {
      icon: <Github className="text-blue-400" size={24} />,
      title: "GitHub",
      value: "ryvexam",
      link: socialLinks.github,
      description: "Découvrez mes projets et contributions"
    },
    {
      icon: <MapPin className="text-blue-400" size={24} />,
      title: "Localisation",
      value: "Pérignat les Sarlièves, Auvergne-Rhône-Alpes",
      description: "Disponible pour des opportunités dans la région"
    }
  ];

  const experiences = [
    {
      title: "Automatisation SecByDesign",
      company: "Michelin",
      startDate: "févr. 2025",
      endDate: "aujourd'hui",
      description: "En tant que membre de l'équipe SecByDesign chez Michelin, je travaille sur l'automatisation des processus de sécurité pour garantir la conformité et la robustesse des systèmes.",
      missions: [
        "Développer des scripts Python pour automatiser les vérifications de sécurité",
        "Analyser les outils et proposer des solutions automatisées",
        "Créer des rapports automatisés pour le suivi des métriques de sécurité"
      ],
      techStack: {
        title: "Stack technique :",
        details: [
          "Langage : Python",
          "Outils : CI/CD, Sécurité automatisée"
        ]
      },
      icon: <Code className="text-blue-400" size={22} />
    },
    {
      title: "Power Platform Developer",
      company: "Michelin",
      startDate: "sept. 2024",
      endDate: "févr. 2025",
      description: "Développement d'outils et rapports pour les opérateurs de production utilisant la suite Microsoft Power Platform.",
      missions: [
        "Création de tableaux de bord et rapports avec Power BI",
        "Développement d'applications métier avec PowerApps",
        "Automatisation de processus avec Power Automate",
        "Accompagnement des utilisateurs dans l'utilisation des outils O365"
      ],
      techStack: {
        title: "Stack technique :",
        details: [
          "Microsoft Power BI",
          "Microsoft PowerApps",
          "Microsoft Power Automate",
          "Suite Microsoft O365"
        ]
      },
      icon: <FolderKanban className="text-blue-400" size={22} />
    },
    {
      title: "Python Software Developer",
      company: "Michelin",
      startDate: "sept. 2023",
      endDate: "sept. 2024",
      description: "En tant que Software Developer en alternance chez Michelin, j'ai mené à bien un projet solo de développement d'une application Streamlit pour automatiser la complétion de fichiers Excel, réduisant considérablement les tâches manuelles et augmentant l'efficacité des utilisateurs.",
      missions: [
        "Concevoir, développer et déployer une application Streamlit pour l'automatisation de la complétion de fichiers Excel",
        "Réaliser l'intégralité du projet, de la réflexion initiale aux tests finaux, en autonomie",
        "Concevoir et implémenter l'interface utilisateur en mettant l'accent sur l'UX/UI pour garantir une expérience utilisateur optimale",
        "Collaborer avec une équipe de 3 utilisateurs pour effectuer des tests, recueillir des retours et effectuer des ajustements basés sur les besoins réels des utilisateurs",
        "Optimiser le code et résoudre les bug",
        "Organiser des réunions régulières avec les utilisateurs pour s'assurer que l'outil répondait à leurs attentes"
      ],
      techStack: {
        title: "Stack technique :",
        details: [
          "Front-end : Streamlit, Python",
          "Back-end : Python",
          "Base de données : Pandas, Excel"
        ]
      },
      icon: <Code className="text-blue-400" size={22} />
    },
    {
      title: "Développeur Web Freelance",
      company: "RyveWeb",
      startDate: "juil. 2022",
      endDate: "aujourd'hui",
      details: [
        "Création de sites web avec CMS (Wordpress)",
        "Création de sites web avec Symfony ou React",
        "Conteneurisation de sites web avec Docker"
      ],
      location: "Pérignat-Lès-Sarlièves, Auvergne-Rhône-Alpes, France",
      workType: "Hybride",
      techStack: {
        title: "Stack technique :",
        details: [
          "React.js (frontend)",
          "Symfony (backend PHP)",
          "Docker (conteneurisation)",
          "WordPress (CMS)"
        ]
      },
      icon: <Code className="text-blue-400" size={22} />
    },
    {
      title: "Technicien système réseau",
      company: "TERTIAIRE-FORMATION-CONSEIL (Tert.io)",
      startDate: "août 2021",
      endDate: "juil. 2023",
      location: "Moulins, Auvergne-Rhône-Alpes, France",
      workType: "Sur site",
      details: [
        "Support à Distance",
        "Intervention à domicile (Installations, diagnostics, réparations)",
        "Mise en place de l'infrastructure réseaux chez divers clients"
      ],
      techStack: {
        title: "Stack technique :",
        details: [
          "Windows Server (maintenance et administration)",
          "Windows Client (dépannage et support)",
          "Diagnostics matériels et logiciels",
          "Infrastructures réseaux"
        ]
      },
      icon: <Network className="text-blue-400" size={22} />
    },
    {
      title: "Technicien informatique",
      company: "Le PAL",
      startDate: "févr. 2021",
      endDate: "févr. 2021",
      location: "Saint-Pourçain-sur-Besbre, Auvergne-Rhône-Alpes, France",
      details: [
        "Installation d'une flotte de switch Cisco pour l'hôtel Le Savanna",
        "Remplacement et configuration des switchs Cisco de la partie Lodge",
        "Migration vers domaine de postes"
      ],
      techStack: {
        title: "Stack technique :",
        details: [
          "Switchs Cisco (configuration et déploiement)",
          "Windows (intégration au domaine et configuration)",
          "Infrastructure réseau"
        ]
      },
      icon: <Network className="text-blue-400" size={22} />
    },
    {
      title: "Opérateur d'attractions",
      company: "Le PAL",
      startDate: "juin 2018",
      endDate: "sept. 2023",
      details: [
        "Accueil de la clientèle sur l'attraction",
        "Vérification des normes de sécurité quotidienne",
        "Surveillance du bon déroulement de l'attraction sur le parcours"
      ],
      additionalInfo: "Saison 2018 - 2019 - 2020 - 2021 - 2023",
      icon: <RollerCoaster className="text-blue-400" size={22} />
    }
  ];

  const certifications = [
    {
      title: "Concepteur développeur d'applications",
      issuer: "Ministère du Travail",
      code: "RNCP37873",
      date: "juil. 2024",
      level: "Niveau 6 (Bac +3/4)",
      details: [
        "Développer une application sécurisée",
        "Concevoir et développer une application sécurisée organisée en couches",
        "Préparer le déploiement d'une application sécurisée"
      ],
      icon: <Code className="text-blue-400" size={24} />
    },
    {
      title: "Test d'anglais pour la communication internationale (TOEIC)",
      score: "950/990 Niveau C1",
      issuer: "Wall Street English France",
      date: "févr. 2024",
      expiry: "févr. 2026",
      icon: <Award className="text-blue-400" size={24} />
    },
    {
      title: "Brevet de Technicien Supérieur (BTS) en Services Informatiques aux Organisations",
      option: "Solutions d'Infrastructure, Systèmes et Réseaux (SISR)",
      issuer: "Ministère de l'Éducation Nationale",
      date: "2023",
      level: "Niveau 5 (Bac +2)",
      details: [
        "Installation, configuration et gestion de réseaux et serveurs",
        "Sécurisation des systèmes d'information",
        "Assistance aux utilisateurs et résolution de problèmes réseaux"
      ],
      icon: <Server className="text-blue-400" size={24} />
    },
    {
      title: "Baccalauréat Scientifique (S) spécialité Informatique et Sciences du Numérique (ISN)",
      issuer: "Ministère de l'Éducation Nationale",
      date: "2017",
      level: "Niveau 4 (Bac)",
      details: [
        "Introduction à l'informatique, à la programmation et aux sciences du numérique",
        "Bases de l'algorithmique et compréhension des systèmes informatiques"
      ],
      icon: <GraduationCap className="text-blue-400" size={24} />
    }
  ];

  const projects = [
    {
      title: "Qroissantage.fr",
      description: "Un site web éducatif conçu pour sensibiliser les professionnels aux dangers des QR codes malveillants. Le projet simule un 'croissantage' (tradition de bureau d'apporter des croissants) en incitant les utilisateurs à scanner un QR code, démontrant ainsi les risques potentiels.",
      image: "/projects/qroissantage.png",
      tags: ["Cybersécurité", "Sensibilisation", "React", "QR Codes"],
      link: "https://qroissantage.fr",
      icon: <Shield className="text-blue-400" size={24} />
    },
    {
      title: "Tert.io",
      description: "Mon premier projet d'envergure avec Symfony, réalisé pour Tertio Informatique à Moulins. Ce site représentait un défi technique significatif qui m'a permis d'approfondir mes compétences en développement PHP/Symfony tout en livrant une interface moderne et responsive pour valoriser les services de l'entreprise.",
      image: "/projects/tertio.webp",
      tags: ["Symfony", "PHP", "Challenge technique", "Responsive"],
      link: "https://tert.io",
      icon: <Globe2 className="text-blue-400" size={24} />
    },
    {
      title: "RyveIT",
      description: "Blog d'actualité informatique développé avec WordPress, proposant des astuces, des bons plans et des tutoriels pour aider les lecteurs à rester informés des dernières tendances technologiques et à améliorer leurs compétences informatiques.",
      image: "/projects/ryveit.png",
      tags: ["WordPress", "Blog Tech", "Tutoriels", "Bons Plans"],
      link: "https://ryveit.com",
      icon: <BookOpen className="text-blue-400" size={24} />
    }
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="text-center">
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 animate-spin-slow bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
                <img
                    src="/profil_pic.png"
                    alt="Maxime VÉRY"
                    className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-white shadow-lg relative z-10"
                />
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Maxime VÉRY
              </h1>
              <h2 className="text-xl sm:text-2xl mb-6 text-blue-200 px-4">Manager de Projet Informatique en Alternance</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin size={20} className="text-blue-400"/>
                <span className="text-sm sm:text-base">Pérignat-lès-Sarlièves, Auvergne-Rhône-Alpes, France</span>
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

          {/* Quote Section */}
          <div className="py-12 sm:py-24 bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6">
              <blockquote className="text-lg sm:text-2xl italic text-center max-w-4xl mx-auto">
                <span className="text-blue-400">"</span>
                Votre travail va remplir une grande partie de votre vie, et la seule façon d'être vraiment satisfait est de faire ce que vous croyez être un grand travail. Et 
                <span className="font-bold text-blue-400"> la seule façon de faire du grand travail est d'aimer ce que vous faites</span>
                <span className="text-blue-400">"</span>
                <footer className="text-xs sm:text-sm mt-4 text-blue-200">- Steve Jobs</footer>
              </blockquote>
            </div>
          </div>
          
          {/* Container for all sections */}
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            
            {/* About Section */}
            <section className="mb-16">
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
            
            {/* Experience Section */}
            <section className="mb-16">
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
            
            {/* Skills Section */}
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
            
            {/* Projects Section */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-400">Projets</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col">
                      <div className="h-48 overflow-hidden relative bg-gray-100/80 flex items-center justify-center p-2">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = '/projects/placeholder.png';
                          }}
                        />
                        <div className="absolute top-0 right-0 m-2 p-2 bg-black/50 rounded-full">
                          {project.icon}
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 flex-grow">
                        <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-blue-900/30 text-blue-200 text-xs px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 pt-0">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm w-full text-center"
                        >
                          Visiter le site
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Certifications Section */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-400">Certifications</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
                <div className="space-y-4 sm:space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white/5 p-4 sm:p-6 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:block">{cert.icon}</div>
                        <div className="space-y-3 flex-1">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-400 leading-tight">{cert.title}</h3>
                            {cert.code && <p className="text-sm sm:text-base text-blue-200">Code RNCP: {cert.code}</p>}
                            {cert.score && <p className="text-sm sm:text-base text-blue-200">{cert.score}</p>}
                            <p className="text-sm sm:text-base text-gray-300">{cert.issuer}</p>
                            {cert.level && <p className="text-sm sm:text-base text-gray-300">{cert.level}</p>}
                          </div>
                          {cert.details && (
                            <div className="mt-4">
                              <h4 className="text-xs sm:text-sm font-semibold text-blue-300 mb-2">Compétences attestées:</h4>
                              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 ml-1">
                                {cert.details.map((detail, idx) => (
                                  <li key={idx} className="text-sm leading-relaxed">{detail}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="flex flex-col sm:flex-row gap-2 text-xs sm:text-sm text-gray-400">
                            <span>Obtenu : {cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Contact Section */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-400">Contact</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {contactInfo.map((info, index) => (
                    info.link ? (
                      <a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="block bg-white/5 p-4 sm:p-6 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-blue-400 group-hover:scale-110 transition-transform">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-blue-400 mb-1 group-hover:text-blue-300">{info.title}</h3>
                            <span className="text-sm sm:text-base text-gray-300 group-hover:text-blue-200 transition-colors block mb-2">
                              {info.value}
                            </span>
                            <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300">{info.description}</p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div key={index} className="bg-white/5 p-4 sm:p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="text-blue-400">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-blue-400 mb-1">{info.title}</h3>
                            <span className="text-sm sm:text-base text-gray-300 block mb-2">{info.value}</span>
                            <p className="text-xs sm:text-sm text-gray-400">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  ))}

                  <div className="sm:col-span-2 bg-white/5 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4">Disponibilité</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                      Actuellement, je suis à la recherche d'une alternance axée sur le développement et/ou DevOps
                      pour une durée de 2 ans. Mon rythme serait d'une semaine en entreprise et une semaine à l'école
                      HESIAS, où je prépare un titre RNCP38905 de Manager de Projet Informatique. Je suis mobile et
                      très motivé à contribuer à des nouveaux projets.
                    </p>
                    <p className="text-sm sm:text-base text-gray-300">
                      N'hésitez pas à me contacter pour échanger sur d'éventuelles collaborations ou opportunités.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
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
              <p className="text-sm text-blue-200">© 2024 Maxime VÉRY. Tous droits réservés.</p>
            </div>
          </footer>
        </div>
      </div>
  );
};

export default Portfolio;