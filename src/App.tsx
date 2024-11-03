import React, { useState } from 'react';
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
  Cpu } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = {
    github: "https://github.com/ryvexam",
    linkedin: "https://www.linkedin.com/in/maxime-very/",
    email: "maximevery@ryvexam.fr"
  };

  const aboutSections = [
    {
      icon: <Briefcase className="text-blue-400" size={24} />,
      title: "Expérience",
      content: "1 an d'expérience en développement Python à Michelin, 2 ans en administration système à Tertio Informatique et également 2 ans en tant que freelance en création de sites internet."
    },
    {
      icon: <Education className="text-blue-400" size={24} />,
      title: "Formation",
      content: "Bac Scientifique option ISN, BTS SIO en Systèmes et Réseaux, Bachelor en Conception Développement d'Applications, et formation Manager de Projet Informatique."
    },
    {
      icon: <Code2 className="text-blue-400" size={24} />,
      title: "Compétences Techniques",
      content: "Maîtrise de React, Symfony, Python, Java, .NET, et des pratiques DevOps."
    }
  ];



  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Développement Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      icon: <Terminal className="text-blue-400" size={24} />,
      title: "Développement Backend",
      skills: [
        { name: "PHP/Symfony", level: 80 },
        { name: "Python", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Java", level: 65 },
        { name: "C#/.NET", level: 30 }

      ]
    },
    {
      icon: <Globe className="text-blue-400" size={24} />,
      title: "DevOps",
      skills: [
        { name: "Linux", level: 70 },
        { name: "Docker", level: 80 },
        { name: "Nginx", level: 60 },
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
        { name: "Streamlit", level: 85 }
      ]
    },
    {
      icon: <Database className="text-blue-400" size={24} />,
      title: "Base de données & Outils",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Git", level: 75 }
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
      title: "Manager de Projet Informatique en alternance",
      company: "Michelin",
      startDate: "oct. 2024",
      endDate: "aujourd'hui",
      details: [
        "PowerBi",
        "PowerApps"
      ],
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
      title: "Freelance Web Developer",
      company: "RyveWeb",
      startDate: "juil. 2022",
      endDate: "aujourd'hui",
      details: [
        "Create Websites using CMS (Wordpress, Webflow)",
        "Create Websites using Symfony or full React",
        "Dockerize Websites"
      ],
      location: "Moulins, Auvergne-Rhône-Alpes, France",
      workType: "Hybride",
      icon: <Code className="text-blue-400" size={22} />
    },
    {
      title: "Technicien système réseau",
      company: "TERTIAIRE-FORMATION-CONSEIL",
      startDate: "août 2021",
      endDate: "juil. 2023",
      location: "Moulins, Auvergne-Rhône-Alpes, France",
      workType: "Sur site",
      details: [
        "Support à Distance",
        "Intervention à domicile (Installations, diagnostics, réparations)",
        "Mise en place de l'infrastructure réseaux chez divers clients"
      ],
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
      title: "Test of English for International Communication (TOEIC)",
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
        "Bases de l’algorithmique et compréhension des systèmes informatiques"
      ],
      icon: <GraduationCap className="text-blue-400" size={24} />
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
                    className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-lg relative z-10"
                />
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Maxime VÉRY
              </h1>
              <h2 className="text-xl sm:text-2xl mb-6 text-blue-200 px-4">Manager de Projet Informatique en Alternance</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin size={20} className="text-blue-400"/>
                <span className="text-sm sm:text-base">Riom, Auvergne-Rhône-Alpes, France</span>
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
                Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do
                what you believe is great work. And
                <span className="font-bold text-blue-400"> the only way to do great work is to love what you do</span>
                <span className="text-blue-400">"</span>
                <footer className="text-xs sm:text-sm mt-4 text-blue-200">- Steve Jobs</footer>
              </blockquote>
            </div>
          </div>

          {/* Mobile Tab Menu */}
          <div className="lg:hidden sticky top-0 z-50 bg-black/70 backdrop-blur-md p-4">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-between"
            >
              <span>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
              <svg
                  className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md mt-1 rounded-lg overflow-hidden">
                  {['about', 'experience', 'skills', 'certifications', 'contact'].map((tab) => (
                      <button
                          key={tab}
                          onClick={() => {
                            setActiveTab(tab);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left transition-colors ${
                              activeTab === tab ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'
                          }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                  ))}
                </div>
            )}
          </div>

          {/* Desktop Tab Menu */}
          <div className="hidden lg:flex justify-center mb-12 space-x-6 pt-12">
            {['about', 'experience', 'skills', 'certifications', 'contact'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full transition-all ${
                        activeTab === tab
                            ? 'bg-blue-500 text-white'
                            : 'bg-white/10 hover:bg-white/20'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-24">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-xl">
              {activeTab === 'about' && (
                  <div className="space-y-6 sm:space-y-8 animate-fadeIn">
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
                          Passionné par l'informatique depuis mon plus jeune âge, j'ai orienté mon parcours académique et professionnel
                          vers le développement d'applications et la gestion de projets informatiques. Mon expérience combine expertise
                          technique et compétences en gestion de projet.
                        </p>
                        <p className="leading-relaxed">
                          Actuellement en poste chez Michelin en tant que Manager de Projet Informatique en alternance, je développe
                          mes compétences en gestion de projet tout en maintenant une forte expertise technique. Je suis particulièrement
                          intéressé par l'innovation technologique et l'optimisation constante de mes projets.
                        </p>
                      </div>
                    </div>
                  </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                  <div className="space-y-6 sm:space-y-8 pt-4 animate-fadeIn">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4 sm:pl-6 relative mt-2">
                          <div className="absolute -left-4 -top-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            {exp.icon}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-blue-400">{exp.title}</h3>
                          <div className="text-sm sm:text-base text-blue-200 mb-2">{exp.company} • {exp.startDate} - {exp.endDate}</div>
                          <div className="bg-white/5 p-3 sm:p-4 rounded-lg mt-2">
                            {exp.description && <p className="text-sm sm:text-base text-gray-300 mb-3">{exp.description}</p>}
                            {exp.techStack && (
                                <div className="space-y-2">
                                  <div>
                                    <h4 className="text-sm sm:text-base text-blue-300 font-semibold">{exp.techStack.title}</h4>
                                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1">
                                      {exp.techStack.details.map((detail, idx) => (
                                          <li key={idx}>{detail}</li>
                                      ))}
                                    </ul>
                                  </div>
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
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                  <div className="animate-fadeIn">
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
              )}
              {/* Certifications Tab */}
              {activeTab === 'certifications' && (
                  <div className="animate-fadeIn space-y-4 sm:space-y-6">
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
                                {cert.expiry && <span className="sm:before:content-['•'] sm:before:mx-2">Expire : {cert.expiry}</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
              )}

              {/* Contact Tab */}
              {activeTab === 'contact' && (
                  <div className="animate-fadeIn">
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
              )}
            </div>
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
              <p className="text-sm text-blue-200">© 2024 Maxime VÉRY. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
  );
};

export default Portfolio;