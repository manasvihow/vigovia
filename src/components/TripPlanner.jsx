// TripPlanner.js
import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import TripForm from './TripForm';
import Itinerary from './Itinerary';
import { topDestinations, indianAirports } from '../constants';
import html2canvas from "html2canvas";
import { pdfExport } from '../utils/pdfHelper';



const TripPlanner = () => {
  const [itinerary, setItinerary] = useState(null);
  const itineraryRef = useRef();

  const getTimeOfDay = (timeString) => {
    if (!timeString) return 'Afternoon';
    const hour = parseInt(timeString.split(':')[0], 10);
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
  };

  const handleUpdateItinerary = (formData) => {
    const startDate = new Date(formData.arrivalDate);
    const daysMap = new Map();
    formData.days.forEach((day, index) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + index);
      const dateString = currentDate.toISOString().split('T')[0];
      daysMap.set(dateString, {
        ...day,
        date: dateString,
        activities: [...day.activities],
      });
    });

    formData.flights.forEach((f) => {
      if (f.departureTime) {
        const dDate = f.departureTime.split('T')[0];
        if (daysMap.has(dDate))
          daysMap.get(dDate).activities.push({
            id: `f-d-${f.id}`,
            name: `Depart from ${f.fromLocation} via ${f.airline}`,
            timeOfDay: getTimeOfDay(f.departureTime.split('T')[1]),
            type: 'flight',
          });
      }
      if (f.arrivalTime) {
        const aDate = f.arrivalTime.split('T')[0];
        if (daysMap.has(aDate))
          daysMap.get(aDate).activities.push({
            id: `f-a-${f.id}`,
            name: `Arrive at ${f.toLocation} via ${f.airline}`,
            timeOfDay: getTimeOfDay(f.arrivalTime.split('T')[1]),
            type: 'flight',
          });
      }
    });

    formData.hotels.forEach((h) => {
      if (h.checkInDate) {
        if (daysMap.has(h.checkInDate))
          daysMap.get(h.checkInDate).activities.push({
            id: `h-in-${h.id}`,
            name: `Check-in to ${h.name}`,
            timeOfDay: getTimeOfDay(h.checkInTime),
            type: 'hotel',
          });
      }
      if (h.checkOutDate) {
        if (daysMap.has(h.checkOutDate))
          daysMap.get(h.checkOutDate).activities.push({
            id: `h-out-${h.id}`,
            name: `Check-out from ${h.name}`,
            timeOfDay: getTimeOfDay(h.checkOutTime),
            type: 'hotel',
          });
      }
    });

    const finalDays = Array.from(daysMap.values()).map((d) => {
      d.activities.sort((a, b) => {
        const order = { Morning: 1, Afternoon: 2, Evening: 3 };
        return order[a.timeOfDay] - order[b.timeOfDay];
      });
      return d;
    });

    setItinerary({ ...formData, days: finalDays });
  };

  const handleExportPdf = () => {
    if (!itineraryRef.current) return;
  
    const element = itineraryRef.current;
  
    pdfExport(element);
  };
  

  const getDestinationName = (code) =>
    topDestinations.find((d) => d.code === code)?.name.split(',')[0] || code;
  const getDepartureCityName = (code) =>
    indianAirports.find((a) => a.code === code)?.name.split('(')[0].trim() || code;

  return (
    <div className="bg-gray-50 p-4 md:p-8 font-sans">
      <div className="mx-auto max-w-7xl space-y-8">
        <TripForm onUpdate={handleUpdateItinerary} />
        <Itinerary
          ref={itineraryRef}
          itinerary={itinerary}
          handleExportPdf={handleExportPdf}
          getDestinationName={getDestinationName}
          getDepartureCityName={getDepartureCityName}
        />
      </div>
    </div>
  );
};

export default TripPlanner;
