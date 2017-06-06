import axios from 'axios';

const apiKey = '3af5d393e9826f8e9c08ee5f67571f39';

module.exports = {
    fetchCurrentWeather: (location) => {
        const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${apiKey}`);
        
        return axios.get(encodedURI)
            .then( (res) => {
                return res.data;
            });
    },

    fetchFiveDayWeather: (location) => {
        const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`);

        return axios.get(encodedURI)
            .then( (res) => {
                return res.data.list;
            })
    }
}