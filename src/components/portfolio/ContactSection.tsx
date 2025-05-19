import React from 'react';

interface ContactProps {
  contactInfo: Array<{
    icon: React.ReactNode;
    title: string;
    value: string;
    link?: string;
    description: string;
  }>;
}

const ContactSection: React.FC<ContactProps> = ({ contactInfo }) => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
