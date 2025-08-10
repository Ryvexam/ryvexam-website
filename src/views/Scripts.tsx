import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Script {
  section: string;
  file: string;
  language: string;
  description: string;
}

const Scripts = () => {
  const [scripts, setScripts] = useState<{ [section: string]: Script[] }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const response = await fetch('/scripts/scripts.json');
        if (!response.ok) {
          throw new Error('Failed to fetch scripts data');
        }
        const data: Script[] = await response.json();
        
        const groupedScripts = data.reduce((acc: { [section: string]: Script[] }, script) => {
          if (!acc[script.section]) {
            acc[script.section] = [];
          }
          acc[script.section].push(script);
          return acc;
        }, {});
        
        setScripts(groupedScripts);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setIsLoading(false);
      }
    };
    
    fetchScripts();
  }, []);

  const filteredScripts = React.useMemo(() => {
    if (!searchTerm) return scripts;
    
    const filtered: { [section: string]: Script[] } = {};
    
    Object.entries(scripts).forEach(([section, sectionScripts]) => {
      const matchingScripts = sectionScripts.filter(script => 
        script.file.toLowerCase().includes(searchTerm.toLowerCase()) || 
        script.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        script.language.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (matchingScripts.length > 0) {
        filtered[section] = matchingScripts;
      }
    });
    
    return filtered;
  }, [scripts, searchTerm]);

  const ScriptCard = ({ script }: { script: Script }) => {
    const scriptPath = `/scripts/${script.section}/${script.file}.${script.language}`;
    
    const languageColors: Record<string, string> = {
      sh: 'bg-green-900 text-green-200',
      bat: 'bg-purple-900 text-purple-200',
      ps1: 'bg-blue-900 text-blue-200',
      py: 'bg-yellow-900 text-yellow-200',
      js: 'bg-amber-900 text-amber-200',
      default: 'bg-blue-900 text-blue-200'
    };
    
    const languageColor = languageColors[script.language] || languageColors.default;
    
    return (
      <Card className="bg-gray-800/80 backdrop-blur border border-blue-500/30 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-2px]">
        <CardContent className="p-5">
          <div className="flex items-center mb-3">
            <span className="text-blue-400 mr-2">📄</span>
            <h3 className="text-xl font-bold text-blue-400">{script.file}</h3>
          </div>
          <p className="text-gray-300 mb-4 min-h-[3rem]">{script.description}</p>
          <div className="flex justify-between items-center">
            <span className={`${languageColor} px-3 py-1 rounded-full text-xs font-medium`}>
              {script.language}
            </span>
            <a 
              href={scriptPath} 
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 bg-blue-950/50 hover:bg-blue-900/50 py-1 px-3 rounded-full"
            >
              View →
            </a>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl text-blue-400">Loading scripts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-400 mb-8 text-center">Scripts</h1>
        
        <div className="relative mb-8 max-w-xl mx-auto">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search scripts by name, description or language..."
            className="w-full bg-gray-800/50 border border-blue-800/50 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {Object.keys(filteredScripts).length === 0 ? (
          <div className="text-center text-gray-300 p-10 bg-gray-800/20 rounded-lg border border-blue-800/20">
            {searchTerm ? 'No scripts match your search' : 'No scripts available'}
          </div>
        ) : (
          <div>
            
            {Object.entries(filteredScripts).map(([section, sectionScripts]) => (
              <div 
                key={section} 
                className="mb-12 transition-opacity duration-300"
              >
                <h2 className="text-3xl font-semibold text-blue-300 mb-6 border-b border-blue-800/50 pb-2 flex items-center">
                  <span className="bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {section.charAt(0)}
                  </span>
                  {section}
                  <span className="ml-3 text-sm bg-blue-900/40 px-2 py-1 rounded-full text-blue-200">
                    {sectionScripts.length} script{sectionScripts.length !== 1 ? 's' : ''}
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {sectionScripts.map((script, index) => (
                    <ScriptCard key={index} script={script} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scripts;


