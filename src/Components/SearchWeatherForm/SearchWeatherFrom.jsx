import { Formik } from "formik";
import s from "./SearchWeatherFrom.module.css";

const SearchWeatherForm = (props) => {
  const validateTextPost = (values) => {
    const errors = {};
    if (!values.searchText || values.searchText.length > 200) {
      errors.text = "Длина не может быть меньше 1 символа или больше 200";
    }
    return errors;
  };

  const addSearch = (values) => {
    props.getBooks(values.startIndex);
  };

  return (
    <Formik
      validate={validateTextPost}
      className={s.fomBlock}
      initialValues={{
        searchText: "",
      }}
      onSubmit={addSearch}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Введите город"
              className={s.searchFromInput}
              type="text"
              name="searchText"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div>
              <button className={s.searchBtn} type="submit">
                Search
              </button>
            </div>
          </div>
          <div className={s.errorsText}>{errors.text && errors.text}</div>
        </form>
      )}
    </Formik>
  );
};

export default SearchWeatherForm;
