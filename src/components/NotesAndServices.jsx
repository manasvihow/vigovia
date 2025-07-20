import React from 'react';
import { Column } from './PaymentPlan';

const NotesAndServices = ({ itinerary }) => {
  const { importantNotes, scopeOfService, flights, hotels } = itinerary;

  const inclusionData = {
    Category: ['Flight', 'Hotel'],
    Count: [flights.length, hotels.length],
    Details: ['All Flights Mentioned As Per Itinerary', hotels.map(h => h.name).join(', ')],
    'Status / Comments': ['Awaiting Confirmation', 'Included'],
  };

  return (
    <div className="space-y-12 font-sans break-before-page">
      
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Important <span className="text-purple-600">Notes</span></h2>
        <div className="flex justify-between gap-4">
          <Column title="Point" width="w-1/3" data={importantNotes.map(n => n.point)} />
          <Column title="Details" width="w-2/3" data={importantNotes.map(n => n.details)} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope of <span className="text-purple-600">Service</span></h2>
        <div className="flex justify-between gap-4">
          <Column title="Service" width="w-1/3" data={scopeOfService.map(s => s.service)} />
          <Column title="Details" width="w-2/3" data={scopeOfService.map(s => s.details)} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Inclusion <span className="text-purple-600">Summary</span></h2>
        <div className="flex justify-between gap-4">
          <Column title="Category" width="w-1/6" data={inclusionData.Category} />
          <Column title="Count" width="w-[10%]" data={inclusionData.Count} />
          <Column title="Details" width="flex-1" data={inclusionData.Details} />
          <Column title="Status / Comments" width="w-1/4" data={inclusionData['Status / Comments']} />
        </div>
      </div>
    </div>
  );
};

export default NotesAndServices;