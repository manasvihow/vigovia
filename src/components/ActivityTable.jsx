import React from 'react';

const ActivityTable = ({ days, destination }) => {

  const Column = ({ title, data, width, hasBorder = false }) => (
    <div className={width}>
      <div className="bg-[#4a235a] text-white text-center font-bold p-3 rounded-t-full shadow-md">
        {title}
      </div>
      <div className={`bg-purple-50 rounded-b-4xl p-3 space-y-2 shadow-md`}>
        {data.map((item, index) => (
          <div key={index} className="text-center text-sm text-gray-800 h-8 flex items-center justify-center">
            {item}
          </div>
        ))}
        {data.length === 0 && <div className="h-8"></div>}
      </div>
    </div>
  );

  // Flatten all activities from all days into a single array
  const allActivities = days.flatMap(day => 
    day.activities
      .filter(activity => !activity.type?.startsWith('flight') && !activity.type?.startsWith('hotel'))
      .map(activity => ({
        ...activity,
        date: day.date,
      }))
  );

  return (
    <div className="font-sans break-before-page">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Activity <span className="text-purple-600">Table</span>
      </h2>

      <div className="flex justify-between gap-4">
        <Column
          title="City"
          width="w-1/5"
          data={allActivities.map(() => destination)}
        />
        <Column
          title="Activity"
          width="flex-1"
          data={allActivities.map(a => a.name)}
          hasBorder={true}
        />
        <Column
          title="Date/Time"
          width="w-1/4"
          data={allActivities.map(a => `${new Date(a.date).toLocaleDateString('en-GB')} / ${a.timeOfDay}`)}
        />
        <Column
          title="Time Required"
          width="w-1/5"
          data={allActivities.map(() => "2-3 Hours")}
        />
      </div>
    </div>
  );
};

export default ActivityTable;