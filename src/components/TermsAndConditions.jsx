import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="font-sans break-inside-avoid pt-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Terms and <span className="text-purple-600">Conditions</span>
      </h2>
      <a 
        href="#" 
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        View all terms and conditions
      </a>
    </div>
  );
};

export default TermsAndConditions;