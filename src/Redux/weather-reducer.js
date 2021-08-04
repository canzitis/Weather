const SET_WEATHER = 'SET_WEATHER'

//Создает свой state

const instalState = {
    weather: null
}


// Пробегаемся по типу и в зависимости от типа что-то делаем с данными

const weatherReducer = (state = instalState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.weather,
            }
            default:
                return state
    }
}





export default weatherReducer;