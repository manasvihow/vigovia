// src/components/TripDetailsBanner.js
import React from 'react';

const TripDetailsBanner = ({ details }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="w-full rounded-2xl border border-purple-300 bg-white p-6 shadow-sm break-inside-avoid">
      <div className="flex items-center justify-between text-center">
        <div>
          <p className="text-sm font-semibold text-gray-500">Departure From</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{details.departureFrom}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Departure</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{formatDate(details.departureDate)}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Destination</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{details.destination}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Arrival</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{formatDate(details.arrivalDate)}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Return</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{formatDate(details.returnDate)}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">No. Of Travellers</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{details.travellers}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsBanner;