import React from "react";
import "../styles/styles.css";
import download1 from "../assets/download1.png";
import { Button } from "react-bootstrap";

const WeatherDisplay = ({ weatherData, unit, toggleUnit }) => {
  if (!weatherData)
    return (
      <div
        style={{
          width: "80%",
          height: "auto",
          color: "red",
          fontSize:'25px',
          margin:'auto',
          marginBottom:'20px'
        }}
      >
        No data to display
      </div>
    );

  const { current, forecast } = weatherData;
  const unitSymbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="weather-display">
      <div
        className="current-weather d-flex align-items-center bg-primary m-auto text-white rounded position-absolute"
        style={{
          width: "500px",
          height: "auto",
          padding: "10px",
          top: "100px",
          left: "55%",
          gap: "30px",
        }}
      >
        <div>
          <h4 className="mt-3">Current Weather in {current.name}</h4>
          <h2>
            Temperature: {current.main.temp} {unitSymbol}
          </h2>
          <h4>Weather: {current.weather[0].description}</h4>
        </div>
        <div>
          <img src={download1} alt="Weather" width="50px" height="50px" />
        </div>
      </div>
      <div style={{ width: "80%", height: "auto" }} className="m-auto">
        <Button
          className="border-0 p-2"
          onClick={toggleUnit}
          style={{ width: "400px", height: "auto" }}
        >
          Toggle to {unit === "metric" ? "Fahrenheit" : "Celsius"}
        </Button>
      </div>
      <div
        className="forecast m-auto bg-dark text-white p-4 mt-5 rounded"
        style={{ width: "80%", height: "auto" }}
      >
        <h2>5-Day Forecast</h2>
        <div className="forecast-cards">
          {forecast.list.map((forecastItem, index) => (
            <div key={index} className="forecast-card">
              <p>{new Date(forecastItem.dt * 1000).toLocaleDateString()}</p>
              <p>
                Temp: {forecastItem.main.temp} {unitSymbol}
              </p>
              <p>{forecastItem.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
