import s from "./SearchWeather.module.css";
import React from "react";
import heroDecorBg from "../../img/hero-decor-bg.png";
import heroMascot from "../../img/hero-mascot.png";
import SearchWeatherForm from "../SearchWeatherForm/SearchWeatherForm.jsx";
import clouds1 from "../../img/clouds1.png";
import clouds2 from "../../img/clouds2.png";
import clouds3 from "../../img/clouds3.png";
import vkImg from "../../img/vk.png";
import gitImg from "../../img/github.png";
import instaImg from "../../img/instagram.png";

const SearchWeather = (props) => {
  return (
    <div className={s.searchWeather}>
      <img className={s.heroDecorBgImg} src={heroDecorBg} alt="" />
      <h4 className={s.weatherLogo}>Weather</h4>
      <img className={s.clouds1} id="clouds1" src={clouds1} alt="" />
      <img className={s.clouds2} src={clouds2} alt="" />
      <img className={s.clouds3} id="clouds3" src={clouds3} alt="" />
      <SearchWeatherForm {...props} />
      <img className={s.heroMascotImg} src={heroMascot} alt="" />
      <div className={s.contacts}>
        <a target="blank" href="https://vk.com/canzit">
          <img src={vkImg} alt="" />
        </a>
        <a target="blank" href="https://github.com/canzitis">
          <img src={gitImg} alt="" />
        </a>
        <a target="blank" href="https://www.instagram.com/canzit/">
          <img src={instaImg} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SearchWeather;
