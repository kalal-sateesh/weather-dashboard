import React from "react";

const Favorites = ({
  favorites,
  currentCity,
  fetchWeather,
  addFavorite,
  removeFavorite,
}) => {
  const handleAddFavorite = () => {
    if (currentCity && !favorites.some((fav) => fav.city === currentCity)) {
      addFavorite(currentCity);
    }
  };

  return (
    <div className="favorites m-auto" style={{ width: "80%", height: "auto" }}>
      <h2>Favourite Cities</h2>
      <button onClick={handleAddFavorite}>Add Current City to Favorites</button>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <h4>{favorite.city}</h4>
            <button onClick={() => fetchWeather(favorite.city)}>
              Show Weather
            </button>
            <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
