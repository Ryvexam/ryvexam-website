import React from 'react';

interface QuoteSectionProps {
  quote: string;
  highlight?: string;
  author: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, highlight, author }) => {
  // Si highlight est fourni, remplacez-le par une version en gras dans la citation
  let formattedQuote = quote;
  if (highlight) {
    const parts = quote.split(highlight);
    formattedQuote = parts.join(`<span class="font-bold text-blue-400">${highlight}</span>`);
  }

  return (
    <div className="py-12 sm:py-24 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <blockquote className="text-lg sm:text-2xl italic text-center max-w-4xl mx-auto">
          <span className="text-blue-400">"</span>
          {highlight ? (
            <span dangerouslySetInnerHTML={{ __html: formattedQuote }} />
          ) : (
            formattedQuote
          )}
          <span className="text-blue-400">"</span>
          <footer className="text-xs sm:text-sm mt-4 text-blue-200">- {author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteSection;
