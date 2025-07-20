import React from 'react';

const DayInputCard = ({ day, dayIndex, handleNestedChange, addItem, removeItem, travellers }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Day {day.dayNumber}</h3>
      
      {/* --- Activities Section --- */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Activities</h4>
        <div className="mt-4 space-y-3">
          {day.activities.length > 0 && (
            <div className="grid grid-cols-12 gap-4 pb-2 border-b border-gray-200">
              <p className="col-span-4 text-xs font-semibold uppercase text-gray-500">Activity Name</p>
              <p className="col-span-4 text-xs font-semibold uppercase text-gray-500">Description</p>
              <p className="col-span-2 text-xs font-semibold uppercase text-gray-500">Time / Slot</p>
              <p className="col-span-1 text-xs font-semibold uppercase text-gray-500">Price</p>
            </div>
          )}
          {day.activities.map((activity, index) => (
            <div key={activity.id} className="grid grid-cols-12 gap-4 items-center">
              <input type="text" name="name" value={activity.name} onChange={(e) => handleNestedChange(dayIndex, 'activities', index, e)} placeholder="e.g., City Tour" className="col-span-4 rounded-md border-gray-300 shadow-sm"/>
              <input type="text" name="description" value={activity.description} onChange={(e) => handleNestedChange(dayIndex, 'activities', index, e)} placeholder="e.g., Visit main landmarks" className="col-span-4 rounded-md border-gray-300 shadow-sm"/>
              <select name="timeOfDay" value={activity.timeOfDay} onChange={(e) => handleNestedChange(dayIndex, 'activities', index, e)} className="col-span-2 rounded-md border-gray-300 shadow-sm">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
              <div className="col-span-1 text-sm text-gray-700 text-center">₹1,000</div>
              <button type="button" onClick={() => removeItem(dayIndex, 'activities', index)} className="text-gray-400 hover:text-red-500 justify-self-center">X</button>
            </div>
          ))}
          <button type="button" onClick={() => addItem(dayIndex, 'activities')} className="mt-4 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">+ Add Activity</button>
        </div>
      </div>
      
      {/* --- Transfers Section --- */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Transfers</h4>
        <div className="mt-4 space-y-3">
          {day.transfers.length > 0 && (
            <div className="grid grid-cols-12 gap-4 pb-2 border-b border-gray-200">
              <p className="col-span-3 text-xs font-semibold uppercase text-gray-500">Type</p>
              <p className="col-span-2 text-xs font-semibold uppercase text-gray-500">From</p>
              <p className="col-span-2 text-xs font-semibold uppercase text-gray-500">To</p>
              <p className="col-span-2 text-xs font-semibold uppercase text-gray-500">Time</p>
              <p className="col-span-1 text-xs font-semibold uppercase text-gray-500">Pax</p>
              <p className="col-span-1 text-xs font-semibold uppercase text-gray-500">Price</p>
            </div>
          )}
          {day.transfers.map((item, index) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 items-center">
              <input type="text" name="type" value={item.type} onChange={(e) => handleNestedChange(dayIndex, 'transfers', index, e)} className="col-span-3 rounded-md border-gray-300 shadow-sm"/>
              <input type="text" name="from" value={item.from} onChange={(e) => handleNestedChange(dayIndex, 'transfers', index, e)} className="col-span-2 rounded-md border-gray-300 shadow-sm"/>
              <input type="text" name="to" value={item.to} onChange={(e) => handleNestedChange(dayIndex, 'transfers', index, e)} className="col-span-2 rounded-md border-gray-300 shadow-sm"/>
              <input type="time" name="timing" value={item.timing} onChange={(e) => handleNestedChange(dayIndex, 'transfers', index, e)} className="col-span-2 rounded-md border-gray-300 shadow-sm"/>
              <input type="number" name="pax" value={item.pax} onChange={(e) => handleNestedChange(dayIndex, 'transfers', index, e)} className="col-span-1 rounded-md border-gray-300 shadow-sm"/>
              <div className="col-span-1 text-sm text-gray-700 text-center">₹3,000</div>
              <button type="button" onClick={() => removeItem(dayIndex, 'transfers', index)} className="text-gray-400 hover:text-red-500 justify-self-center">X</button>
            </div>
          ))}
          <button type="button" onClick={() => addItem(dayIndex, 'transfers')} className="mt-4 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">+ Add Transfer</button>
        </div>
      </div>
    </div>
  );
};

export default DayInputCard;