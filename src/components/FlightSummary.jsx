// src/components/FlightSummary.js
import React from 'react';
import SummaryRow from './SummaryRow';

const FlightSummary = ({ flights }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Date TBD';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit' });
  };

  return (
    <div className="space-y-4 break-inside-avoid">
      <h2 className="text-2xl font-bold text-gray-900">
        Flight <span className="text-purple-600">Summary</span>
      </h2>
      <div className="space-y-3">
        {flights.map((flight) => (
          <SummaryRow key={flight.id} label={formatDate(flight.departureTime)}>
            <p className="text-gray-800">
              <span className="font-bold">{flight.airline}</span> From {flight.fromLocation} To {flight.toLocation}.
            </p>
          </SummaryRow>
        ))}
      </div>
      <p className="text-xs text-gray-500 pt-2">
        Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25Kg Checked Baggage.
      </p>
    </div>
  );
};

export default FlightSummary;