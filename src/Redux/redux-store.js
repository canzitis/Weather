import {
    applyMiddleware
} from "redux";
import {
    combineReducers,
    createStore
} from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weather-reducer";


let reducers = combineReducers({
    weatherReducerPage: weatherReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;