import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  const temperature = unit === "celsius" ? props.celsius : fahrenheit();

  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(temperature)}</span>
      <span className="unit">
        {unit === "celsius" ? (
          <>
            <span className="selected-unit">°C</span>
            {" | "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </>
        ) : (
          <>
            <a href="/" onClick={showCelsius}>
              °C
            </a>
            {" | "}
            <span className="selected-unit">°F</span>
          </>
        )}
      </span>
    </div>
  );
}
