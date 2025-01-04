import React from 'react';
import logo from "../src/assets/logo.png";
import './preloder.css'
const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="mythili" />
    </div>
  );
};

export default Preloader;
