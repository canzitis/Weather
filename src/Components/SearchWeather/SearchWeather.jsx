import s from "./SearchWeather.module.css";
import React from "react";
import heroDecorBg from "../../img/hero-decor-bg.png";
import heroMascot from "../../img/hero-mascot.png";
import SearchWeatherForm from "../SearchWeatherForm/SearchWeatherFrom";
import clouds1 from "../../img/clouds1.png";
import clouds2 from "../../img/clouds2.png";
import clouds3 from "../../img/clouds3.png";

const SearchWeather = () => {
  return (
    <div className={s.searchWeather}>
      <img className={s.heroDecorBgImg} src={heroDecorBg} alt="" />
      <h4 className={s.weatherLogo}>Weather</h4>
      <img className={s.clouds1} id="clouds1" src={clouds1} alt="" />
      <img className={s.clouds2} src={clouds2} alt="" />
      <img className={s.clouds3} id="clouds3" src={clouds3} alt="" />
      <SearchWeatherForm />
      <img className={s.heroMascotImg} src={heroMascot} alt="" />
    </div>
  );
};

export default SearchWeather;
