import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state || {};

  if (!hotel) {
    return (
      <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
            Error
          </h1>
          <p className="text-gray-600 mb-4">
            No hotel data found. Please go back and select a hotel to book.
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleConfirm = () => {
    
    alert(`Booking confirmed for ${hotel.name}`);
    navigate("/PaymentPage", { state: { hotel } });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Confirm Booking
        </h1>
        <div className="text-center mb-4">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h2>
          <p className="text-gray-600 mb-4">{hotel.description}</p>
          <div className="text-xl font-bold text-blue-500 mb-4">
            {hotel.price}
          </div>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors w-full"
          onClick={handleConfirm}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ConfirmPage;
