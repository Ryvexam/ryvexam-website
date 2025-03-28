import React from "react";
import { Card, CardContent } from "./ui/card";

interface FileCardProps {
  fileName: string;
  fileContent: string;
  fileType: string;
  className?: string;
}

export const FileCard: React.FC<FileCardProps> = ({
  fileName,
  fileContent,
  fileType,
  className
}) => {
  return (
    <Card
      className={`cursor-pointer ${className || ""}`}
      file={{
        content: fileContent,
        type: fileType,
        name: fileName
      }}
    >
      <CardContent className="p-4">
        <div className="flex items-center">
          <svg 
            className="w-6 h-6 mr-2 text-blue-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          <span className="font-medium">{fileName}</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Click to view file contents
        </p>
      </CardContent>
    </Card>
  );
};
