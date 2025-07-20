// Itinerary.js
import React, { forwardRef } from "react";
import DayItinerary from './DayItinerary';
import ItineraryBanner from './ItineraryBanner';
import TripDetailsBanner from './TripDetailsBanner';
import FlightSummary from './FlightSummary';
import PaymentPlan from './PaymentPlan';
import HotelBookings from './HotelBookings';
import ActivityTable from './ActivityTable';
import NotesAndServices from './NotesAndServices';
import VisaDetails from './VisaDetails';
import TermsAndConditions from './TermsAndConditions';
import Footer from './Footer';
import logo from "../assets/logo.png";

const Itinerary = forwardRef(({ itinerary, handleExportPdf, getDestinationName, getDepartureCityName }, ref) => {
  if (!itinerary) return null;

  const hasActivities = itinerary.days.some(day =>
    day.activities.some(act => !act.type)
  );

  const displayDetails = {
    ...itinerary,
    destination: getDestinationName(itinerary.destination),
    departureFrom: getDepartureCityName(itinerary.departureFrom),
  };

  return (
    <div ref={ref} className="space-y-8 rounded-xl bg-white p-6 shadow-lg">
      <div className="text-center">
        <img src={logo} alt="Company Logo" className="mx-auto h-60 w-auto" />
      </div>

      <div id="itinerary-content" className="space-y-8 p-4 bg-white">
        <ItineraryBanner
          name={itinerary.userName}
          title={`${getDestinationName(itinerary.destination)} Itinerary`}
          duration={`${itinerary.numberOfDays || 5} Days ${itinerary.numberOfDays > 1 ? itinerary.numberOfDays - 1 : 0} Nights`}
        />
        <TripDetailsBanner details={displayDetails} />

        <div className="w-full space-y-8 pt-4 border-t">
          {itinerary.days.map((day, index) => (
            <div key={day.dayNumber}>
              <DayItinerary
                data={{
                  day,
                  destinationName: getDestinationName(itinerary.destination),
                }}
              />
              {index < itinerary.days.length - 1 && (
                <hr className="mt-8 border-gray-300" />
              )}
            </div>
          ))}
        </div>

        {itinerary.flights?.length > 0 && (
          <div className="pt-4 border-t">
            <FlightSummary flights={itinerary.flights} />
          </div>
        )}
        {itinerary.hotels?.length > 0 && (
          <div className="pt-4 border-t">
            <HotelBookings hotels={itinerary.hotels} destination={getDestinationName(itinerary.destination)} />
          </div>
        )}
        {itinerary.visa && (
          <div className="pt-4 border-t">
            <VisaDetails visa={itinerary.visa} />
          </div>
        )}
        <div className="pt-4 border-t">
          <NotesAndServices itinerary={itinerary} />
        </div>

        {hasActivities && (
          <div className="pt-4 border-t">
            <ActivityTable days={itinerary.days} destination={getDestinationName(itinerary.destination)} />
          </div>
        )}

        <TermsAndConditions />
        <div className="pt-4 border-t">
          <PaymentPlan details={itinerary} />
        </div>
      </div>

      <div className="pt-8">
        <Footer />
      </div>

      <div className="text-center pt-6 border-t">
        <button
          onClick={handleExportPdf}
          className="rounded-lg bg-green-600 px-6 py-3 font-bold text-white shadow-md hover:bg-green-700 transition"
        >
          Generate & Download PDF
        </button>
      </div>
    </div>
  );
});

export default Itinerary;
