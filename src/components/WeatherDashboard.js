import React, { useState, useEffect, useCallback } from 'react';
import Search from '../components/Search';
import WeatherDisplay from '../components/WeatherDisplay';
import Favorites from '../components/Favorites';
import axios from 'axios';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState('metric');

  const fetchWeather = useCallback((city) => {
    setCurrentCity(city);
    localStorage.setItem("lastCity", city);

    const apiKey = "8b28b5c8c33bddd6d0c910dc2feb878f";
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

    Promise.all([axios.get(weatherURL), axios.get(forecastURL)])
      .then(([weatherResponse, forecastResponse]) => {
        setWeatherData({
          current: weatherResponse.data,
          forecast: forecastResponse.data,
        });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [unit]);


  useEffect(() => {
    axios.get('http://localhost:5000/favorites')
      .then(response => setFavorites(response.data))
      .catch(error => console.error('Error fetching favorites:', error));
    
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      fetchWeather(lastCity);
    }
  }, [fetchWeather]);

  const toggleUnit = () => {
    setUnit(prevUnit => prevUnit === 'metric' ? 'imperial' : 'metric');
  };

  const addFavorite = (city) => {
    axios.post('http://localhost:5000/favorites', { city })
      .then(response => setFavorites([...favorites, response.data]))
      .catch(error => console.error('Error adding favorite:', error));
  };

  const removeFavorite = (id) => {
    axios.delete(`http://localhost:5000/favorites/${id}`)
      .then(() => setFavorites(favorites.filter(fav => fav.id !== id)))
      .catch(error => console.error('Error removing favorite:', error));
  };

  return (
    <div className="weather-dashboard">
      <Search fetchWeather={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} unit={unit} toggleUnit={toggleUnit} />
      <Favorites 
        favorites={favorites} 
        currentCity={currentCity} 
        fetchWeather={fetchWeather} 
        addFavorite={addFavorite} 
        removeFavorite={removeFavorite} 
      />
    </div>
  );
};

export default WeatherDashboard;
