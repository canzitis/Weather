import { Formik } from "formik";
import s from "./SearchWeatherForm.module.css";

const SearchWeatherForm = (props) => {
  debugger;
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
          <div className={s.errorsText}>{errors.text && errors.text}</div>
          <div className={s.cityUndefined}>
            {props.errorSearch ? props.textErorSearch : null}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SearchWeatherForm;
