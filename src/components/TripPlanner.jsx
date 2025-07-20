// TripPlanner.js
import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import TripForm from './TripForm';
import Itinerary from './Itinerary';
import { topDestinations, indianAirports } from '../constants';

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

  const handleExportPdf = async () => {
    if (!itineraryRef.current) return;
  
    const element = itineraryRef.current;
  
    // 🔻 STEP 1: Temporarily remove all oklch color styles
    const allElements = element.querySelectorAll('*');
    const originalStyles = [];
  
    // allElements.forEach((el) => {
    //   const style = window.getComputedStyle(el);
    //   const color = style.getPropertyValue('color');

    //   console.log('color', color);
    //   const bg = style.getPropertyValue('background-image');

    //   console.log('bg', bg);
    //   if (color.includes('oklch') || bg.includes('oklch')) {
    //     originalStyles.push({
    //       el,
    //       color: el.style.color,
    //       bg: el.style.backgroundImage,
    //     });
    //     if (color.includes('oklch')) el.style.color = '#000'; // fallback text color
    //     if (bg.includes('oklch')) el.style.backgroundImage = 'none'; // remove bg
    //   }
    // });

    allElements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      const inlineStyle = el.style;
  
      // Loop over all computed style properties
      for (let i = 0; i < computedStyle.length; i++) {
        const propName = computedStyle[i];
        const propValue = computedStyle.getPropertyValue(propName);
  
        if (propValue.includes('oklch')) {
          console.log('oklch', propName, propValue);
          // Remove oklch by overriding with a fallback
          if (propName === 'color') {
            inlineStyle.color = '#000'; // default text color
          } else if (propName === 'background-color') {
            inlineStyle.backgroundColor = '#fff'; // default background color
          } else if (propName === 'background-image') {
            inlineStyle.backgroundImage = 'none';
          } else {
            // fallback: remove oklch from any other property
            inlineStyle.setProperty(propName, 'initial');
          }
        }
      }
    });
  
    // // 🔻 STEP 2: Render to canvas
    // const canvas = await html2canvas(element, {
    //   scale: 2,
    //   useCORS: true,
    // });
  
    // const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
  
    // const imgProps = pdf.getImageProperties(imgData);
    // const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    let heightLeft = pdfHeight * 3;
    let position = 0;
    
    while (heightLeft > 0) {
      // pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      pdf.setFontSize(10);
      pdf.text('Generated by TripPlanner', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
  
      heightLeft -= pdfHeight;
      if (heightLeft > 0) {
        pdf.addPage();
        position = -pdfHeight;
      }
    }

        
    pdf.html(element, {
      callback: function (doc) {
        doc.save(`itinerary-${Date.now()}.pdf`);
      },
    })
  
    // pdf.save(`itinerary-${Date.now()}.pdf`);
  
    // 🔻 STEP 3: Restore original styles
    originalStyles.forEach(({ el, color, bg }) => {
      el.style.color = color;
      el.style.backgroundImage = bg;
    });
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
