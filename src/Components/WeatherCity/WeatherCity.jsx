import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import CloudHandler from "./cloudHandler";
import s from "./WeatherCity.module.css";

const WeatherCity = (props) => {
  debugger;
  if (!props.loadingWeather) {
    return <Redirect to="/searchWeather" />;
  }
  return (
    <div className={s.weatherCity}>
      <NavLink to="/searchWeather">
        <h2>Назад</h2>
      </NavLink>
      <div className={s.city}>
        <h4>{props.weather.name}</h4>
      </div>
      <div>
        <CloudHandler {...props} />
      </div>
      <div className={s.temp}>
        <h4>{Math.round(props.weather.main.temp)}°</h4>
        <h5>
          {props.weather.main.temp_min} / {props.weather.main.temp_max}
        </h5>
        <h5>{props.weather.weather[0].description}</h5>
        <div className={s.border}></div>
      </div>
    </div>
  );
};

export default WeatherCity;
