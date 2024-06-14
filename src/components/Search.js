import React, { useState } from "react";
import "../styles/styles.css";

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    fetchWeather(city);
    setCity("");
  };

  return (
    <div className="search">
      <label className="fw-bold mb-3">Enter a City Name</label>
      <br></br>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="E.g., London, Hyderabad"
        className="form-control fw-bold d-inline"
        style={{ width: "400px", height: "auto" }}
      />
      <br></br>
      <button
        onClick={handleSearch}
        className="d-flex justify-content-center align-items-center border-0 rounded text-white bg-primary mt-3 mb-3"
        style={{ width: "400px", height: "auto" }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
