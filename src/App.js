import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by Josephine Marecha and is {""}
        <a
          href="https://github.com/dahnedewy/weather-app-reactt"
          target="blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
