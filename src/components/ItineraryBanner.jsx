import React from 'react';
// Importing the icons from the react-icons library
import { FaPlane, FaHotel, FaCity, FaCarSide, FaSuitcaseRolling } from 'react-icons/fa';

const ItineraryBanner = ({ name, title, duration }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50 p-8 font-sans">
      <div className="w-full max-w-4xl rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 p-8 text-center text-white shadow-lg">
        <div className="flex flex-col items-center justify-center gap-3">
          
          {/* Text Content */}
          <p className="text-2xl">Hi, {name}!</p>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-xl">{duration}</p>

          {/* Icons Row */}
          <div className="mt-4 flex items-center justify-center gap-6 text-2xl">
            <FaPlane />
            <FaHotel />
            <FaCity />
            <FaCarSide />
            <FaSuitcaseRolling />
          </div>
        </div>
      </div>
    </div>
  );
};

// Add default props to make the component work even if no props are passed
ItineraryBanner.defaultProps = {
  name: 'Rahul',
  title: 'Singapore Itinerary',
  duration: '6 Days 5 Nights',
};

export default ItineraryBanner;