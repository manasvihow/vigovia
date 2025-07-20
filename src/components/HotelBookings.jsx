import React from 'react';

const HotelBookings = ({ hotels, destination }) => {
  const calculateNights = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
    const nightCount = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return nightCount > 0 ? nightCount : 1;
  };

  const Column = ({ title, data, width }) => (
    <div className={width}>
      <div className="bg-[#4a235a] text-white text-center font-bold p-3 rounded-t-full shadow-md">
        {title}
      </div>
      {/* CORRECTED: Removed the 'h-full' class from this div */}
      <div className="bg-purple-50 p-3 space-y-2 shadow-md rounded-b-4xl">
        {data.map((item, index) => (
          <div key={index} className="text-center text-sm text-gray-800 h-10 flex items-center justify-center">
            {item}
          </div>
        ))}
        {/* Add empty rows if there's no data to maintain a minimum height */}
        {data.length === 0 && <div className="h-10"></div>}
      </div>
    </div>
  );

  return (
    <div className="font-sans break-after-page">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Hotel <span className="text-purple-600">Bookings</span>
      </h2>

      <div className="flex justify-between gap-4">
        <Column width="w-1/6" title="City" data={hotels.map(() => destination)} />
        <Column width="w-1/6" title="Check In" data={hotels.map(h => new Date(h.checkInDate).toLocaleDateString('en-GB'))} />
        <Column width="w-1/6" title="Check Out" data={hotels.map(h => new Date(h.checkOutDate).toLocaleDateString('en-GB'))} />
        <Column width="w-[10%]" title="Nights" data={hotels.map(h => calculateNights(h.checkInDate, h.checkOutDate))} />
        <Column width="flex-1" title="Hotel Name" data={hotels.map(h => h.name)} />
      </div>

      <div className="mt-4 text-xs text-gray-600 space-y-1">
        <p>1. All Hotels Are Tentative And Can Be Replaced With Similar.</p>
        <p>2. Breakfast Included For All Hotel Stays.</p>
        <p>3. All Hotels Will Be 4* And Above Category.</p>
        <p>4. A maximum occupancy of 2 people/room is allowed in most hotels.</p>
      </div>
    </div>
  );
};

export default HotelBookings;