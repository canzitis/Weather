import {
    weatherApi
} from "../api/api"

const SET_WEATHER = 'SET_WEATHER'
const CLEAR_LOADING_WEATHER = "CLEAR_LOADING_WEATHER"

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

            case CLEAR_LOADING_WEATHER:
                return {
                    ...state,
                    loadingWeather: false
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
export const setClearloadingWeather = () => {
    debugger
    return {
        type: CLEAR_LOADING_WEATHER
    }
}


export const getWeather = (searchCity) => {
    return async (dispatch) => {
        const data = await weatherApi.getweather(searchCity)
        if (data.status === 200) {
            dispatch(setStartIndex(data.data))

        }
    }

}

export const clearloadingWeather = () => {
    return (dispatch) => {
        dispatch(setClearloadingWeather())
    }

}





export default weatherReducer;