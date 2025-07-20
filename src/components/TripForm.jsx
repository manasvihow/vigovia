import React, { useState, useEffect } from 'react';
import { topDestinations, indianAirports, destinationData } from '../constants';
import DayInputCard from './DayInputCard';

const AccordionSection = ({ title, isOpen, onToggle, children }) => (
  <div className="rounded-xl bg-white shadow-lg">
    <button type="button" className="flex justify-between items-center w-full p-6 text-left" onClick={onToggle}>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <span className="text-3xl font-light text-gray-500">{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="px-6 pb-6 border-t border-gray-200">{children}</div>}
  </div>
);

const TripForm = ({ onUpdate }) => {
  const [itinerary, setItinerary] = useState({
    userName: 'Rahul',
    departureFrom: 'DEL',
    destination: 'DXB',
    departureDate: '2025-08-14',
    arrivalDate: '2025-08-15',
    returnDate: '2025-08-19',
    travellers: 2,
    flights: [],
    hotels: [],
    importantNotes: [
        { id: 1, point: 'Passport', details: 'Please carry your passport at all times.' },
        { id: 2, point: 'Greeting', details: 'On arrival, meet & greet at the airport.' },
    ],
    scopeOfService: [
        { id: 1, service: 'Flight Tickets', details: 'Delivered 3 Days Post Full Payment' },
    ],
    days: Array.from({ length: 5 }, (_, i) => ({ dayNumber: i + 1, activities: [], transfers: [] })),
  });

  const [openSections, setOpenSections] = useState({
    overview: true,
    flights: false,
    hotels: false,
    notes: false,
    services: false,
    dailyPlan: false,
  });

  useEffect(() => {
    if (itinerary.arrivalDate && itinerary.returnDate) {
      const start = new Date(itinerary.arrivalDate);
      const end = new Date(itinerary.returnDate);
      if (end < start) return;
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      if (diffDays > 0 && diffDays !== itinerary.days.length) { handleDaysChange(diffDays); }
    }
  }, [itinerary.arrivalDate, itinerary.returnDate]);

  const toggleSection = (section) => setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  const handleMainChange = (e) => setItinerary(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleDaysChange = (newDayCount) => {
     if (newDayCount > 30) newDayCount = 30; if (newDayCount < 1) newDayCount = 1;
     setItinerary(prev => {
        const currentDays = prev.days;
        const dayDiff = newDayCount - currentDays.length;
        if (dayDiff > 0) {
            const newDays = [...Array(dayDiff)].map((_, i) => ({ dayNumber: currentDays.length + i + 1, activities: [], transfers: [] }));
            return { ...prev, days: [...currentDays, ...newDays] };
        } else if (dayDiff < 0) {
            return { ...prev, days: currentDays.slice(0, newDayCount) };
        }
        return prev;
     });
  };
  
  const handleSuggestItinerary = () => {
    const suggestedData = destinationData[itinerary.destination];
    if (!suggestedData) { return alert("Sorry, we don't have suggestions for this destination yet."); }
    const sortedActivities = [...suggestedData.activities].sort((a, b) => a.rank - b.rank);
    const topActivities = sortedActivities.slice(0, itinerary.days.length);
    const suggestedDays = itinerary.days.map((day, dayIndex) => ({
      ...day,
      activities: topActivities[dayIndex] ? [{ ...topActivities[dayIndex], id: Date.now(), price: '1000' }] : [],
    }));
    setItinerary(prev => ({ ...prev, days: suggestedDays }));
  };

  const handleTopLevelItemChange = (itemType, index, e) => {
    const { name, value } = e.target;
    const newItems = [...itinerary[itemType]];
    newItems[index][name] = value;
    setItinerary(prev => ({ ...prev, [itemType]: newItems }));
  };

  const addTopLevelItem = (itemType) => {
    let newItem;
    if (itemType === 'flights') {
      const flightPrice = 200000 * (itinerary.travellers || 1);
      newItem = { id: Date.now(), fromLocation: '', toLocation: '', airline: '', flightNumber: '', departureTime: '', arrivalTime: '', price: String(flightPrice) };
    } else {
      newItem = { id: Date.now(), name: '', checkInDate: '', checkInTime: '14:00', checkOutDate: '', checkOutTime: '11:00', price: '' };
    }
    setItinerary(prev => ({ ...prev, [itemType]: [...prev[itemType], newItem] }));
  };
  
  const removeTopLevelItem = (itemType, index) => {
    const newItems = [...itinerary[itemType]];
    newItems.splice(index, 1);
    setItinerary(prev => ({ ...prev, [itemType]: newItems }));
  };

  const handleDynamicListChange = (listType, index, e, field) => {
    const newList = [...itinerary[listType]];
    if (field) { newList[index][field] = e.target.value; } 
    else { newList[index] = e.target.value; }
    setItinerary(prev => ({...prev, [listType]: newList}));
  };
  
  const addDynamicListItem = (listType) => {
    const newItem = listType === 'importantNotes' ? { id: Date.now(), point: '', details: '' } : { id: Date.now(), service: '', details: ''};
    setItinerary(prev => ({...prev, [listType]: [...prev[listType], newItem]}));
  };
  
  const removeDynamicListItem = (listType, index) => {
    const newList = [...itinerary[listType]];
    newList.splice(index, 1);
    setItinerary(prev => ({...prev, [listType]: newList}));
  };

  const handleNestedChange = (dayIndex, itemType, itemIndex, e) => {
    const { name, value } = e.target;
    const newDays = [...itinerary.days];
    newDays[dayIndex][itemType][itemIndex][name] = value;
    setItinerary(prev => ({ ...prev, days: newDays }));
  };

  const addItem = (dayIndex, itemType) => {
    const newDays = [...itinerary.days];
    let newItem;
    if (itemType === 'activities') {
      newItem = { id: Date.now(), timeOfDay: 'Afternoon', name: '', description: '', price: '1000' };
    } else { // Transfers
      newItem = { id: Date.now(), type: '', from: '', to: '', timing: '12:00', pax: itinerary.travellers, price: '3000' };
    }
    newDays[dayIndex][itemType].push(newItem);
    setItinerary(prev => ({ ...prev, days: newDays }));
  };
  
  const removeItem = (dayIndex, itemType, itemIndex) => {
    const newDays = [...itinerary.days];
    newDays[dayIndex][itemType].splice(itemIndex, 1);
    setItinerary(prev => ({ ...prev, days: newDays }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(itinerary);
    alert('Itinerary details captured!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <AccordionSection title="Trip Overview" isOpen={openSections.overview} onToggle={() => toggleSection('overview')}>
        <p className="mt-1 text-sm leading-6 text-gray-600">Start with the main details of your trip.</p>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3"><label className="block text-sm font-medium text-gray-900">Traveller's Name</label><input type="text" name="userName" value={itinerary.userName} onChange={handleMainChange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" /></div>
            <div className="sm:col-span-3"><label className="block text-sm font-medium text-gray-900">No. of Travellers</label><input type="number" name="travellers" value={itinerary.travellers} onChange={handleMainChange} min="1" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" /></div>
            <div className="sm:col-span-3"><label className="block text-sm font-medium text-gray-900">Departure From</label><select name="departureFrom" value={itinerary.departureFrom} onChange={handleMainChange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">{indianAirports.map(a => <option key={a.code} value={a.code}>{a.name}</option>)}</select></div>
            <div className="sm:col-span-3"><label className="block text-sm font-medium text-gray-900">Destination</label><select name="destination" value={itinerary.destination} onChange={handleMainChange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">{topDestinations.map(d => <option key={d.code} value={d.code}>{d.name}</option>)}</select></div>
            <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-900">Departure Date</label><input type="date" name="departureDate" value={itinerary.departureDate} onChange={handleMainChange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" /></div>
            <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-900">Arrival Date</label><input type="date" name="arrivalDate" value={itinerary.arrivalDate} onChange={handleMainChange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" /></div>
            <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-900">Return Date</label><input type="date" name="returnDate" value={itinerary.returnDate} onChange={handleMainChange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" /></div>
        </div>
      </AccordionSection>

      <AccordionSection title="Flights" isOpen={openSections.flights} onToggle={() => toggleSection('flights')}>
        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-12 gap-4 pb-2 border-b">
            <p className="col-span-2 text-xs font-semibold uppercase text-gray-500">From</p><p className="col-span-2 text-xs font-semibold uppercase text-gray-500">To</p><p className="col-span-2 text-xs font-semibold uppercase text-gray-500">Airline</p><p className="col-span-2 text-xs font-semibold uppercase text-gray-500">Departure</p><p className="col-span-2 text-xs font-semibold uppercase text-gray-500">Arrival</p><p className="col-span-1 text-xs font-semibold uppercase text-gray-500">Price</p>
          </div>
          {itinerary.flights.map((flight, index) => (
            <div key={flight.id} className="grid grid-cols-12 gap-4 items-center">
              <input name="fromLocation" value={flight.fromLocation} onChange={(e) => handleTopLevelItemChange('flights', index, e)} placeholder="e.g., DEL" className="col-span-2 rounded-md border-gray-300 shadow-sm" />
              <input name="toLocation" value={flight.toLocation} onChange={(e) => handleTopLevelItemChange('flights', index, e)} placeholder="e.g., DXB" className="col-span-2 rounded-md border-gray-300 shadow-sm" />
              <input name="airline" value={flight.airline} onChange={(e) => handleTopLevelItemChange('flights', index, e)} placeholder="Airline" className="col-span-2 rounded-md border-gray-300 shadow-sm" />
              <input type="datetime-local" name="departureTime" value={flight.departureTime} onChange={(e) => handleTopLevelItemChange('flights', index, e)} className="col-span-2 text-xs rounded-md border-gray-300 shadow-sm" />
              <input type="datetime-local" name="arrivalTime" value={flight.arrivalTime} onChange={(e) => handleTopLevelItemChange('flights', index, e)} className="col-span-2 text-xs rounded-md border-gray-300 shadow-sm" />
              <div className="col-span-1 text-sm text-gray-700 text-center">₹{Number(flight.price).toLocaleString('en-IN')}</div>
              <button type="button" onClick={() => removeTopLevelItem('flights', index)} className="text-gray-400 hover:text-red-500 justify-self-center">X</button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => addTopLevelItem('flights')} className="mt-4 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200">+ Add Flight</button>
      </AccordionSection>

      <AccordionSection title="Hotel Stays" isOpen={openSections.hotels} onToggle={() => toggleSection('hotels')}>
         <div className="mt-4 space-y-3">
            <div className="grid grid-cols-12 gap-4 pb-2 border-b"><p className="col-span-4 text-xs font-semibold uppercase text-gray-500">Hotel Name</p><p className="col-span-3 text-xs font-semibold uppercase text-gray-500">Check-in</p><p className="col-span-3 text-xs font-semibold uppercase text-gray-500">Check-out</p><p className="col-span-1 text-xs font-semibold uppercase text-gray-500">Price/Night</p></div>
            {itinerary.hotels.map((hotel, index) => (<div key={hotel.id} className="grid grid-cols-12 gap-4 items-center"><input name="name" value={hotel.name} onChange={(e) => handleTopLevelItemChange('hotels', index, e)} placeholder="Hotel Name" className="col-span-4 rounded-md border-gray-300 shadow-sm" /><div className="col-span-3 flex gap-2"><input type="date" name="checkInDate" value={hotel.checkInDate} onChange={(e) => handleTopLevelItemChange('hotels', index, e)} className="w-full rounded-md border-gray-300 shadow-sm" /><input type="time" name="checkInTime" value={hotel.checkInTime} onChange={(e) => handleTopLevelItemChange('hotels', index, e)} className="w-full rounded-md border-gray-300 shadow-sm" /></div><div className="col-span-3 flex gap-2"><input type="date" name="checkOutDate" value={hotel.checkOutDate} onChange={(e) => handleTopLevelItemChange('hotels', index, e)} className="w-full rounded-md border-gray-300 shadow-sm" /><input type="time" name="checkOutTime" value={hotel.checkOutTime} onChange={(e) => handleTopLevelItemChange('hotels', index, e)} className="w-full rounded-md border-gray-300 shadow-sm" /></div><input type="number" name="price" value={hotel.price} onChange={(e) => handleTopLevelItemChange('hotels', index, e)} placeholder="₹" className="col-span-1 rounded-md border-gray-300 shadow-sm" /><button type="button" onClick={() => removeTopLevelItem('hotels', index)} className="text-gray-400 hover:text-red-500 justify-self-center">X</button></div>))}
        </div>
        <button type="button" onClick={() => addTopLevelItem('hotels')} className="mt-4 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200">+ Add Hotel</button>
      </AccordionSection>
      
      <AccordionSection title="Important Notes" isOpen={openSections.notes} onToggle={() => toggleSection('notes')}>
        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-12 gap-4 pb-2 border-b"><p className="col-span-4 text-xs font-semibold uppercase text-gray-500">Point</p><p className="col-span-7 text-xs font-semibold uppercase text-gray-500">Details</p></div>
          {itinerary.importantNotes.map((note, index) => (<div key={note.id || index} className="grid grid-cols-12 gap-4 items-center"><input type="text" value={note.point} onChange={(e) => handleDynamicListChange('importantNotes', index, e, 'point')} placeholder="e.g., Passport" className="col-span-4 rounded-md border-gray-300 shadow-sm"/><input type="text" value={note.details} onChange={(e) => handleDynamicListChange('importantNotes', index, e, 'details')} placeholder="Details about the point" className="col-span-7 rounded-md border-gray-300 shadow-sm"/><button type="button" onClick={() => removeDynamicListItem('importantNotes', index)} className="text-gray-400 hover:text-red-500 justify-self-center">X</button></div>))}
          <button type="button" onClick={() => addDynamicListItem('importantNotes')} className="mt-4 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200">+ Add Note</button>
        </div>
      </AccordionSection>

      <AccordionSection title="Scope of Service" isOpen={openSections.services} onToggle={() => toggleSection('services')}>
        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-12 gap-4 pb-2 border-b"><p className="col-span-5 text-xs font-semibold uppercase text-gray-500">Service</p><p className="col-span-6 text-xs font-semibold uppercase text-gray-500">Details</p></div>
          {itinerary.scopeOfService.map((item, index) => (<div key={item.id} className="grid grid-cols-12 gap-4 items-center"><input type="text" value={item.service} onChange={(e) => handleDynamicListChange('scopeOfService', index, e, 'service')} placeholder="e.g., Support" className="col-span-5 rounded-md border-gray-300 shadow-sm"/><input type="text" value={item.details} onChange={(e) => handleDynamicListChange('scopeOfService', index, e, 'details')} placeholder="e.g., Provided" className="col-span-6 rounded-md border-gray-300 shadow-sm"/><button type="button" onClick={() => removeDynamicListItem('scopeOfService', index)} className="text-gray-400 hover:text-red-500 justify-self-center">X</button></div>))}
          <button type="button" onClick={() => addDynamicListItem('scopeOfService')} className="mt-4 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200">+ Add Service</button>
        </div>
      </AccordionSection>
      
      <AccordionSection title="Daily Plan" isOpen={openSections.dailyPlan} onToggle={() => toggleSection('dailyPlan')}>
        <div className="space-y-6 pt-4">
          <p className="text-sm text-gray-600">Add activities and transfers for each day of your trip.</p>
          <div className="border-t pt-4">
            <button type="button" onClick={handleSuggestItinerary} className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500">Suggest Top Activities</button>
          </div>
          <div className="space-y-4">{itinerary.days.map((day, dayIndex) => (<div key={day.dayNumber} className="rounded-xl bg-gray-50 border p-6"><DayInputCard day={day} dayIndex={dayIndex} travellers={itinerary.travellers} handleNestedChange={handleNestedChange} addItem={addItem} removeItem={removeItem} /></div>))}</div>
        </div>
      </AccordionSection>
      
      <div className="flex justify-end pt-4"><button type="submit" className="rounded-lg bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500">Save & Preview Itinerary</button></div>
    </form>
  );
};

export default TripForm;