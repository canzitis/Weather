import {
    weatherApi
} from "../api/api"

const SET_WEATHER = 'SET_WEATHER'

//Создает свой state

const instalState = {
    weather: null,
    loadingWeather: false
}


// Пробегаемся по типу и в зависимости от типа что-то делаем с данными

const weatherReducer = (state = instalState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.weather,
                    loadingWeather: true
            }
            default:
                return state
    }
}


export const setStartIndex = (weather) => {
    debugger
    return {
        type: SET_WEATHER,
        weather,
    }
}


export const getWeather = (searchCity) => {
    return async (dispatch) => {
        const data = await weatherApi.getweather(searchCity)
        if (data.status === 200) {
            debugger;
            dispatch(setStartIndex(data.data))

        }
    }

}





export default weatherReducer;