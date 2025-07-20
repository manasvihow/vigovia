import React from 'react';

// You can create a simple Icon component for the bullet points if you want to customize them
const BulletIcon = () => (
  <svg height="24" width="24" className="inline-block -ml-1 mr-2 h-5 w-5 fill-current text-gray-700" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
  </svg>
);


const DayItinerary = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 p-8 font-sans">
      <div className="flex w-full max-w-5xl items-stretch gap-8">

        {/* Column 1: Day Bar */}
        <div className="flex items-center justify-center rounded-full bg-[#4a235a] px-4 py-16">
          <p className="text-lg font-bold text-white [writing-mode:sideways-lr]">Day 1</p>
        </div>

        {/* Column 2: Image and Date */}
        <div className="flex flex-shrink-0 flex-col items-center justify-center text-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop"
            alt="Beach scenery in Singapore"
            className="h-40 w-40 rounded-full object-cover shadow-md"
          />
          <p className="mt-4 text-xl font-bold text-gray-800">27th November</p>
          <p className="text-md text-gray-600">Arrival In Singapore & City Exploration</p>
        </div>

        {/* Column 3: Timeline and Activities */}
        <div className="relative flex-grow pl-10">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 top-2 h-[95%] w-0.5 bg-blue-400"></div>

          <div className="space-y-8">
            {/* Morning Section */}
            <div className="relative">
              <div className="absolute -left-2.5 top-1 h-3 w-3 rounded-full border-2 border-blue-400 bg-white"></div>
              <div className="pl-6">
                <p className="font-bold text-gray-800">Morning</p>
                <p className="mt-1 text-gray-600">• Arrive In Singapore. Transfer From Airport To Hotel.</p>
              </div>
            </div>

            {/* Afternoon Section */}
            <div className="relative">
              <div className="absolute -left-2.5 top-1 h-3 w-3 rounded-full border-2 border-blue-400 bg-white"></div>
              <div className="pl-6">
                <p className="font-bold text-gray-800">Afternoon</p>
                <ul className="mt-1 list-inside space-y-1 text-gray-600">
                  <li>• Check Into Your Hotel.</li>
                  <li>• Visit Marina Bay Sands Sky Park (2-3 Hours).</li>
                  <li>• Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.</li>
                </ul>
              </div>
            </div>

            {/* Evening Section */}
            <div className="relative">
              <div className="absolute -left-2.5 top-1 h-3 w-3 rounded-full border-2 border-blue-400 bg-white"></div>
              <div className="pl-6">
                <p className="font-bold text-gray-800">Evening</p>
                <p className="mt-1 text-gray-600">• Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayItinerary;