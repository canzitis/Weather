import React from "react";
import { connect } from "react-redux";
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
    loadingWeather:state.weatherReducerPage.loadingWeather
  };
};

export default connect(mapStateToProps, {})(WeatherCityContainer);
