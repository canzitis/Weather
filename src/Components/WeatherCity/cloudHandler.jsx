import cloudImg from "../../img/sky condition/cloudy.png";
import rainImg from "../../img/sky condition/rain.png";
import showerImg from "../../img/sky condition/shower.png";
import sunnyImg from "../../img/sky condition/sunny.png";
import s from "./WeatherCity.module.css";

const CloudHandler = (props) => {
  debugger;
  const main = props.weather.weather[0].main;
  return (
    <div className={s.cloudsBlock}>
      {main === "Clear" ? (
        <img src={sunnyImg} alt="" />
      ) : main === "Rain" ? (
        <img src={rainImg} alt="" />
      ) : main === "Clouds" ? (
        <img src={cloudImg} alt="" />
      ) : main === "Snow" ? (
        <img src={showerImg} alt="" />
      ) : null}
    </div>
  );
};

export default CloudHandler;
