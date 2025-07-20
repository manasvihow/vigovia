import React from 'react';
import { Column } from './PaymentPlan';

const ActivityTable = ({ days, destination }) => {

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