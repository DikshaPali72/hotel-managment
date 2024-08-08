
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    // Handle the payment process here
    alert(`Payment successful for ${hotel.name} using ${paymentMethod}`);
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
       
        <div className="text-center mb-1">
          <h3 className="text-3xl font-bold text-center mb-6 text-blue-600">Select Payment Method for {hotel.name}</h3>
          <div className="flex flex-col items-center">
            <button
              className={`w-full px-4 py-2 rounded-md mb-2 ${
                paymentMethod === "Credit Card" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setPaymentMethod("Credit Card")}
            >
              Credit Card
            </button>
            <button
              className={`w-full px-4 py-2 rounded-md mb-2 ${
                paymentMethod === "Paytm" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setPaymentMethod("Paytm")}
            >
              Paytm
            </button>
            <button
              className={`w-full px-4 py-2 rounded-md mb-2 ${
                paymentMethod === "PayPal" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setPaymentMethod("PayPal")}
            >
              PayPal
            </button>
            <button
              className={`w-full px-4 py-2 rounded-md mb-2 ${
                paymentMethod === "Net Banking" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setPaymentMethod("Net Banking")}
            >
              Net Banking
            </button>
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors w-full mb-4"
            onClick={handlePayment}
          >
            Pay Now
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition-colors w-full"
            onClick={() => navigate("/ConfirmPage", { state: { hotel } })}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
