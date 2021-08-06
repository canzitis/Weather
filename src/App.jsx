import { Route } from "react-router-dom";
import "./App.css";
import React from "react";
import SearchWeatherContainer from "./Components/SearchWeather/SearchWeatherContainer";
import WeatherCityContainer from "./Components/WeatherCity/WeatherCityContainer";

const App = () => {
  return (
    <div className="App">
      <div className="app-wraper">
        <Route
          path="/searchWeather"
          render={() => <SearchWeatherContainer />}
        />
        <Route path="/weatherCity" render={() => <WeatherCityContainer />} />
      </div>
    </div>
  );
};

export default App;
