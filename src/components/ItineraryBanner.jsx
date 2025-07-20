// src/components/ItineraryBanner.js
import React from 'react';
import { FaPlane, FaHotel, FaCity, FaCarSide, FaSuitcaseRolling } from 'react-icons/fa';

const ItineraryBanner = ({ name, title, duration }) => {
  return (
    <div className="w-full rounded-3xl bg-gradient-to-r from-[#4a235a] to-[#3b19d1] p-8 text-center text-white shadow-lg break-inside-avoid">
      <div className="flex flex-col items-center justify-center gap-3">
        
        <p className="text-2xl">Hi, {name}!</p>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-xl">{duration}</p>

        <div className="mt-4 flex items-center justify-center gap-6 text-2xl">
          <FaPlane />
          <FaHotel />
          <FaCity />
          <FaCarSide />
          <FaSuitcaseRolling />
        </div>
      </div>
    </div>
  );
};

export default ItineraryBanner;