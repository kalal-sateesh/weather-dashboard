import React from "react";

const AppHeader = () => {
  return (
    <header>
      <nav
        className="d-flex justify-content-center align-items-center text-white"
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "rgb(100, 116, 139)",
        }}
      >
        <h2>Weather Dashboard</h2>
      </nav>
    </header>
  );
};

export default AppHeader;
