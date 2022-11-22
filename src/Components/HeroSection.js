import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1>hi i am ayush</h1>
      <p>this is para</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
      >
        click me
      </button>
    </div>
  );
};

export default HeroSection;
