import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import hotel1 from "../Image/hotel1.png";
import hotel2 from "../Image/hotel2.png";
import hotel3 from "../Image/hotel3.png";
import hotel4 from "../Image/hotel4.png";
import hotel5 from "../Image/hotel5.png";
import hotel6 from "../Image/hotel6.png";
import hotel7 from "../Image/hotel7.png";
import hotel8 from "../Image/hotel8.png";
import hotel9 from "../Image/hotel9.png";
import hotel10 from "../Image/hotel10.png";

const HotelSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 4;

  const hoteldata = [
    {
      id: "1",
      name: "Dreamland Resort",
      image: hotel1,
      description:
        "A serene escape with luxurious amenities and stunning views.",
      price: "700rs/night",
    },
    {
      id: "2",
      name: "Paradise Inn",
      image: hotel2,
      description: "Experience unparalleled comfort and top-notch service.",
      price: "1200rs/night",
    },
    {
      id: "3",
      name: "Sunshine Suites",
      image: hotel3,
      description: "Bright, airy rooms with all the modern conveniences.",
      price: "900rs/night",
    },
    {
      id: "4",
      name: "Cozy Corner Hotel",
      image: hotel4,
      description: "A home away from home with personalized service.",
      price: "800rs/night",
    },
    {
      id: "5",
      name: "Grand Horizon",
      image: hotel5,
      description: "Elegant rooms and gourmet dining in the heart of the city.",
      price: "1500rs/night",
    },
    {
      id: "6",
      name: "Seaside Escape",
      image: hotel6,
      description: "Enjoy breathtaking ocean views and beachside activities.",
      price: "1300rs/night",
    },
    {
      id: "7",
      name: "Mountain Retreat",
      image: hotel7,
      description:
        "A peaceful haven nestled in the mountains, perfect for relaxation.",
      price: "1100rs/night",
    },
    {
      id: "8",
      name: "Urban Oasis",
      image: hotel8,
      description: "Modern design meets comfort in the bustling city center.",
      price: "1400rs/night",
    },
    {
      id: "9",
      name: "Heritage Haven",
      image: hotel9,
      description: "A historic hotel with charming decor and a rich history.",
      price: "1200rs/night",
    },
    {
      id: "10",
      name: "Riverside Lodge",
      image: hotel10,
      description: "Tranquil riverside views and cozy accommodations.",
      price: "1000rs/night",
    },
  ];

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hoteldata.slice(
    indexOfFirstHotel,
    indexOfFirstHotel + hotelsPerPage
  );
  const totalPages = Math.ceil(hoteldata.length / hotelsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBookNow = (hotel) => {
    if (hotel) {
      navigate("/ConfirmPage", { state: { hotel } });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        Hotel Search Results
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentHotels.map((hotel) => (
          <div
            className="bg-white border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between"
            key={hotel.id}
          >
            <div>
              <div className="text-2xl font-bold text-gray-800 mb-2">
                {hotel.name}
              </div>
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <div className="text-gray-600 mb-4">{hotel.description}</div>
              <div className="text-xl font-bold text-blue-500">
                {hotel.price}
              </div>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors w-full"
                onClick={() => handleBookNow(hotel)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HotelSearch;
