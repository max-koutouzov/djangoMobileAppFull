import logo from './logo.png';
import './App.css';
import React from "react";
import SurfShopList from "./surfshoplist/surfshops";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web App for Surf Lovers
        </p>
        <h1>
          Surf Shops
        </h1>
        <SurfShopList/>
      </header>
    </div>
  );
}

export default App;
