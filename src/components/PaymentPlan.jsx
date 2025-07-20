import React from 'react';
import SummaryRow from './SummaryRow';

const PaymentPlan = ({ details }) => {

  const calculateTotal = () => {
    let total = 0;
    details.days.forEach(day => {
      day.activities?.forEach(item => { total += Number(item.price) || 0; });
      day.transfers?.forEach(item => { total += Number(item.price) || 0; });
    });
    details.flights?.forEach(item => { total += Number(item.price) || 0; });
    details.hotels?.forEach(item => { total += Number(item.price) || 0; });
    return total;
  };

  const totalAmount = calculateTotal();
  const installment1 = totalAmount * 0.30;
  const installment2 = totalAmount * 0.40;
  const installment3 = totalAmount - (installment1 + installment2);

  const formatCurrency = (amount) => `₹${Math.round(amount).toLocaleString('en-IN')}`;

  const installmentData = {
    installments: ['Installment 1', 'Installment 2', 'Installment 3'],
    amounts: [formatCurrency(installment1), formatCurrency(installment2), formatCurrency(installment3)],
    dueDates: ['Initial Payment', 'Post Visa Approval', '20 Days Before Departure'],
  };
  // This function now calculates the total from all itinerary items

  const Column = ({ title, data }) => (
    <div className="flex-1">
      <div className="bg-[#4a235a] text-white text-center font-bold p-3 rounded-t-full shadow-md">
        {title}
      </div>
      <div className="bg-purple-50 rounded-b-4xl p-3 mt-2 space-y-4 shadow-md">
        {data.map((item, index) => (
          <div key={index} className="text-center text-sm text-gray-800 h-8 flex items-center justify-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );


  return (
    <div className="space-y-4 font-sans break-inside-avoid">
      <h2 className="text-2xl font-bold text-gray-900">Payment <span className="text-purple-600">Plan</span></h2>
      <div className="space-y-3">
        <SummaryRow label="Total Amount">
          <p className="font-bold text-gray-900">
            {formatCurrency(totalAmount)}
            <span className="ml-4 font-normal text-gray-600">For {details.travellers} Pax (Inclusive Of GST)</span>
          </p>
        </SummaryRow>
        <SummaryRow label="TCS"><p>Not Collected</p></SummaryRow>
      </div>
      <div className="flex justify-between gap-4 pt-6">
        <Column title="Installment" data={installmentData.installments} />
        <Column title="Amount" data={installmentData.amounts} />
        <Column title="Due Date" data={installmentData.dueDates} />
      </div>
    </div>
  );
};

export default PaymentPlan;