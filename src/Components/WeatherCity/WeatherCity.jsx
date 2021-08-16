import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import CloudHandler from "./cloudHandler";
import s from "./WeatherCity.module.css";
import termometrImg from "../../img/Temperature.png";
import backImg from "../../img/back-square.png";

const WeatherCity = (props) => {
  debugger;
  if (!props.loadingWeather) {
    return <Redirect to="/searchWeather" />;
  }

  const str = props.weather.weather[0].description;
  const newStr = str[0].toUpperCase() + str.slice(1);

  return (
    <div className={s.weatherCity}>
      <NavLink
       className={s.back}
        to="/searchWeather"
        onClick={() => {
          props.setClearloadingWeather();
        }}
      >
        <img className={s.backImg} src={backImg} alt="" />
      </NavLink>
      <div className={s.city}>
        <h4>{props.weather.name}</h4>
      </div>
      <div className={s.cloudHandler}>
        <CloudHandler {...props} />

        <h5>{newStr}</h5>
      </div>
      <div className={s.temp}>
        <h5>Температура</h5>
        <div className={s.tempFlexBox}>
          <img className={s.termometrImg} src={termometrImg} alt="" />
          <h4>{Math.round(props.weather.main.temp)}°</h4>
        </div>
        <div>
          <h5>Ощущается как: {Math.round(props.weather.main.feels_like)}°</h5>
        </div>
        <h5>
          min {Math.round(props.weather.main.temp_min)}° / max{" "}
          {Math.round(props.weather.main.temp_max)}°
        </h5>
        <div className={s.mainInfo}>
          <div>
            <h5>Давление</h5>
            <h5>{props.weather.main.pressure} мм рт.ст.</h5>
          </div>
          <div>
            <h5>Влажность</h5>
            <h5>{props.weather.main.humidity} %</h5>
          </div>
          <div>
            <h5>Ветер</h5>
            <h5>{props.weather.wind.speed} м/с</h5>
          </div>
        </div>
        <div className={s.border}></div>
      </div>
    </div>
  );
};

export default WeatherCity;
