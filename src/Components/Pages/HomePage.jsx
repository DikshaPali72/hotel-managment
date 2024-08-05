import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import './HomePage.css';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const [textIndex, setTextIndex] = useState(0);
  const [textArray, setTextArray] = useState([
    "book hotel",
    "guest house",
    "group Hotel",
    "couple stay",
    "find deals",
    "explore options",
    "reserve now",
  ]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [textArray]);

  const handleSearch = () => {
    const newErrors = {};

    if (place === "") {
      newErrors.place = "Please enter a place.";
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      newErrors.checkInDate = "Check-in date must be today or later.";
    }

    if (checkOutDate <= checkInDate) {
      newErrors.checkOutDate = "Check-out date must be after check-in date.";
    }

    if (rooms < 1) {
      newErrors.rooms = "Please enter a valid number of rooms.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      navigate("/HotelSearch", {
        
      });
    }
  };

  return (
    <div className="homepage-container " >
      <div className="overlay">
        <div className="text-center text-white">
          <h1 className="homepage-title">Welcome to DreamLand</h1>
          <p className="homepage-subtitle">
            Your adventure starts here. Book your hotel now!
            <br />
            <span className="font-extrabold italic text-5xl">
              {textArray[textIndex]}
            </span>
          </p>
          <div className="search-form">
            <input
              type="text"
              placeholder="Enter Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="search-input"
            />
            {errors.place && <p className="error">{errors.place}</p>}
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check-in"
              className="search-input"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
            {errors.checkInDate && <p className="error">{errors.checkInDate}</p>}
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check-out"
              className="search-input"
              dateFormat="dd/MM/yyyy"
              minDate={checkInDate}
            />
            {errors.checkOutDate && <p className="error">{errors.checkOutDate}</p>}
            <input
              type="number"
              placeholder="Rooms"
              className="search-input"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              min="1"
            />
            {errors.rooms && <p className="error">{errors.rooms}</p>}
            <button type="button" onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
