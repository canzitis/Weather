import { connect } from "react-redux";
import { getWeather } from "../../Redux/weather-reducer";
import SearchWeather from "./SearchWeather";
import s from "./SearchWeather.module.css";
import leaflet1 from "../../img/leaflet1.png";
import leaflet2 from "../../img/leaflet2.png";
import leaflet3 from "../../img/leaflet3.png";
import leaflet4 from "../../img/leaflet4.png";
import leaflet5 from "../../img/leaflet5.png";
import leaflet6 from "../../img/leaflet6.png";
import { Redirect } from "react-router-dom";

const SearchWeatherContainer = (props) => {
  if (props.loadingWeather) {
    return <Redirect to="/weatherCity" />;
  }
  return (
    <div>
      <img className={s.leaflet1} src={leaflet1} alt="" />
      <img className={s.leaflet2} src={leaflet2} alt="" />
      <img className={s.leaflet3} src={leaflet3} alt="" />
      <img className={s.leaflet4} src={leaflet4} alt="" />
      <img className={s.leaflet5} src={leaflet5} alt="" />
      <img className={s.leaflet6} src={leaflet6} alt="" />
      <SearchWeather {...props} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loadingWeather: state.weatherReducerPage.loadingWeather,
    errorSearch: state.weatherReducerPage.errorSearch,
    textErorSearch: state.weatherReducerPage.textErorSearch,
  };
};

export default connect(mapStateToProps, { getWeather })(SearchWeatherContainer);
