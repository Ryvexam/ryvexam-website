import React, { useState } from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  file?: {
    content: string;
    type: string;
    name: string;
  };
  onClick?: () => void;
}

export const Card = ({ className, children, file, onClick }: CardProps) => {
  const [showFile, setShowFile] = useState(false);
  
  const handleClick = () => {
    if (file) {
      setShowFile(!showFile);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`rounded-lg shadow-md overflow-hidden ${className || ""}`}
      onClick={handleClick}
      style={{ cursor: file ? 'pointer' : 'default' }}
    >
      {showFile && file ? (
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{file.name}</h3>
          <div className="bg-gray-50 p-3 rounded border">
            <pre className="whitespace-pre-wrap">{file.content}</pre>
          </div>
          <button 
            className="mt-3 px-4 py-2 bg-gray-200 rounded" 
            onClick={(e) => {
              e.stopPropagation();
              setShowFile(false);
            }}
          >
            Close
          </button>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export const CardContent = ({ className, children }: CardProps) => {
  return <div className={`${className || ""}`}>{children}</div>;
};
