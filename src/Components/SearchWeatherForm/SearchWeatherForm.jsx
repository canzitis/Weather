import { Formik } from "formik";
import s from "./SearchWeatherForm.module.css";
import backSearch from "../../img/arrow-left.png";

const SearchWeatherForm = (props) => {
  const validateTextPost = (values) => {
    const errors = {};
    if (!values.searchCity || values.searchCity.length > 200) {
      errors.text = "Длина не может быть меньше 1 символа или больше 200";
    }
    return errors;
  };

  const addSearch = (values) => {
    props.getWeather(values.searchCity);
  };
  const errorSearch = () => {
    props.setErrorSearch(false, null);
  };
  return (
    <Formik
      validate={validateTextPost}
      className={s.fomBlock}
      initialValues={{
        searchCity: "",
      }}
      onSubmit={addSearch}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {props.errorSearch ? (
            <div>
              <div className={s.cityUndefined}>{props.textErorSearch}</div>
              <div className={s.cityUndefinedBack}>
                <a onClick={errorSearch}>
                  <h4>Вернуться к поиску</h4>
                  <img src={backSearch} alt="" />
                </a>
              </div>
            </div>
          ) : (
            <div>
              <input
                placeholder={"Введите город"}
                className={s.searchFromInput}
                type="text"
                name="searchCity"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.searchCity}
              />
              <div className={s.searchBtnBlock}>
                <button className={s.searchBtn} type="submit">
                  Поиск
                </button>
              </div>
            </div>
          )}
          <div className={s.errorsText}>{errors.text && errors.text}</div>
        </form>
      )}
    </Formik>
  );
};

export default SearchWeatherForm;
