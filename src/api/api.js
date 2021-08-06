import * as axios from 'axios'

const instanceAPI = {
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    APIKEY: '167c4a2b42b5bf2bcac967cb75b369c1'
}

export const weatherApi = {
    getweather(city) {
        debugger;
        return axios.get(`${instanceAPI.baseURL}?q=${city}&units=metric&appid=${instanceAPI.APIKEY}`).then(response => {
            return response
        })
    },
}