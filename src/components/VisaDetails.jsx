import React from 'react';

const VisaDetails = ({ visa }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric'});
  };

  return (
    <div className="font-sans break-inside-avoid">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Visa <span className="text-purple-600">Details</span>
      </h2>
      <div className="flex items-center rounded-lg border border-purple-200 bg-white shadow-sm p-4 justify-around">
        <div className="text-left">
          <p className="font-semibold text-gray-800">Visa Type :</p>
          <p className="text-gray-600">{visa.type}</p>
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-800">Validity :</p>
          <p className="text-gray-600">{visa.validity}</p>
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-800">Processing Date :</p>
          <p className="text-gray-600">{formatDate(visa.processingDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;