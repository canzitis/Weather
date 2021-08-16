import {
    weatherApi
} from "../api/api"

const SET_WEATHER = 'SET_WEATHER'
const CLEAR_LOADING_WEATHER = "CLEAR_LOADING_WEATHER"
const ERROR_SEARCH = "ERROR_SEARCH"

//Создает свой state

const instalState = {
    weather: null,
    loadingWeather: false,
    errorSearch: false,
    textErorSearch: null
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
                case ERROR_SEARCH:
                    return {
                        ...state,
                        errorSearch: action.errorSearch,
                            textErorSearch: action.textErorSearch
                    }
                    default:
                        return state
    }
}


export const setStartIndex = (weather) => {
    return {
        type: SET_WEATHER,
        weather,
    }
}

export const setClearloadingWeather = () => {
    return {
        type: CLEAR_LOADING_WEATHER
    }
}

export const setErrorSearch = (errorSearch, textErorSearch) => {
    return {
        type: ERROR_SEARCH,
        errorSearch,
        textErorSearch
    }
}


export const getWeather = (searchCity) => {
    return async (dispatch) => {
        const data = await weatherApi.getweather(searchCity)
        if (data.status === 200) {
            dispatch(setStartIndex(data.data))
        } else if (data.response.data.message === 'city not found') {
            dispatch(setErrorSearch(true, 'Город не найден'))
        }
    }

}


export default weatherReducer;