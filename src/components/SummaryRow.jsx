// src/components/SummaryRow.js
import React from 'react';

const SummaryRow = ({ label, children }) => {
  return (
    <div className="flex items-stretch rounded-lg border border-[#4a235a] bg-white shadow-sm overflow-hidden break-inside-avoid">
      {/* Left Side: The Arrow-shaped Label */}
      <div 
        className="flex-shrink-0 bg-[#faf5ff] flex items-center justify-center p-4 pr-8 text-[#364153] font-semibold"
        style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}
      >
        <span className="min-w-[120px] text-center">{label}</span>
      </div>
      
      {/* Right Side: The Content */}
      <div className="flex-grow p-4 flex items-center">
        {children}
      </div>
    </div>
  );
};

export default SummaryRow;