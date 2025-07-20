import React from 'react';
import { FaCar, FaPlaneDeparture, FaPlaneArrival, FaBed } from 'react-icons/fa';

const DayItinerary = ({ data }) => {
  const { day, destinationName } = data;

  const getIcon = (type) => {
    switch (type) {
        case 'flight-departure': return <FaPlaneDeparture className="text-white h-3 w-3"/>;
        case 'flight-arrival': return <FaPlaneArrival className="text-white h-3 w-3"/>;
        case 'hotel-checkin': return <FaBed className="text-white h-3 w-3"/>;
        case 'hotel-checkout': return <FaBed className="text-white h-3 w-3"/>;
        case 'transfer': return <FaCar className="text-gray-600 h-3 w-3"/>;
        default: return <span className="text-blue-600 font-bold">•</span>;
    }
  };
  
  const getIconBg = (type) => {
    switch (type) {
        case 'flight-departure': return 'bg-red-500';
        case 'flight-arrival': return 'bg-green-500';
        case 'hotel-checkin': return 'bg-blue-500';
        case 'hotel-checkout': return 'bg-orange-500';
        default: return 'bg-transparent';
    }
  };

  const groupedEvents = {
    Morning: day.activities.filter(a => a.timeOfDay === 'Morning'),
    Afternoon: day.activities.filter(a => a.timeOfDay === 'Afternoon'),
    Evening: day.activities.filter(a => a.timeOfDay === 'Evening'),
  };

  return (
    <div className="flex w-full items-start gap-8 font-sans break-inside-avoid py-6">
      <div className="flex flex-shrink-0 items-center justify-center rounded-full bg-[#321E5D] py-28 px-4">
        <p className="text-lg font-bold text-white [writing-mode:sideways-lr] tracking-wider">Day {day.dayNumber}</p>
      </div>

      <div className="flex flex-shrink-0 flex-col items-center justify-center text-center">
        <img src={`https://picsum.photos/seed/${day.date}/200/300`} alt={destinationName} className="h-40 w-40 rounded-full object-cover shadow-md"/>
        <p className="mt-4 text-2xl font-bold text-gray-800">{new Date(day.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
        <p className="text-xl text-gray-600">{destinationName}</p>
      </div>

      <div className="w-full pt-2">
        <div className="relative">
          <div className="absolute left-4 top-2 h-full w-0.5 bg-[#2F80ED]"></div>
          <div className="space-y-6">
            {Object.entries(groupedEvents).map(([time, events]) => (
              events.length > 0 && (
                <div key={time} className="relative flex items-start">
                  <div className="absolute left-4 top-2.5 -ml-[5px] h-3 w-3 rounded-full border-2 border-[#680099] bg-white"></div>
                  <p className="w-32 flex-shrink-0 pl-10 font-bold text-gray-800">{time}</p>
                  <ul className="flex-grow space-y-2 text-gray-700">
                    {events.map(event => (
                      <li key={event.id} className="flex items-start gap-3">
                        <div className={`mt-1 h-4 w-4 rounded-full ${getIconBg(event.type)} flex-shrink-0 flex items-centerjustify-center`}>
                            {getIcon(event.type)}
                        </div>
                        <span>
                          <span className="font-bold">{event.name}</span>
                          
                          {event.description ? `: ${event.description}` : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayItinerary;