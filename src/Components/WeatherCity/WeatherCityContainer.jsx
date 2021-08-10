import React from "react";
import { connect } from "react-redux";
import { clearloadingWeather } from "../../Redux/weather-reducer";
import WeatherCity from "./WeatherCity";

const WeatherCityContainer = (props) => {
  return (
    <div>
      <WeatherCity {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weatherReducerPage.weather,
    loadingWeather: state.weatherReducerPage.loadingWeather,
  };
};
export default connect(mapStateToProps, { clearloadingWeather })(
  WeatherCityContainer
);
