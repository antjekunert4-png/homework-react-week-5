import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/antjekunert4-png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antje Kunert
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/antjekunert4-png/homework-react-week-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
