import React from 'react';

interface CertificationsProps {
  certifications: Array<{
    title: string;
    issuer: string;
    code?: string;
    date: string;
    level?: string;
    details?: string[];
    score?: string;
    expiry?: string;
    icon: React.ReactNode;
  }>;
}

const CertificationsSection: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
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
  );
};

export default CertificationsSection;
