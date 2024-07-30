import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const HomePage = () => {
  const [place, setPlace] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
   
};

  return (
    <div>
      <div className="text-center ">
        <h1 className="">Welcome to DreamLand</h1>
        <p className="">Your adventure starts here. Book your hotel now!</p>
      </div>
      <div className="text-center ">
        <input
          type="text"
          placeholder="Enter Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <DatePicker
          placeholder="Check-in"
          dateFormat="dd/MM/yyyy"
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
        />
        <DatePicker
          placeholder="Check-Out"
          dateFormat="dd/MM/yyyy"
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
        />
        <input
          type="number"
          placeholder="Rooms"
          className="search-input"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          min="1"
        />
        <button type="button" onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;
