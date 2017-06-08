import axios from 'axios';

const apiKey = '3af5d393e9826f8e9c08ee5f67571f39';

function fetchCurrentWeather(location) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${apiKey}`);
    
    return axios.get(encodedURI)
        .then( res => res.data );
}

function fetchFiveDayWeather(location) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`);

    return axios.get(encodedURI)
        .then( res => res.data.list);
}

function handleError(err) {
    console.warn(err);
    return null;
} 

module.exports = {
    getWeatherData: location => {
        return axios.all([
            fetchCurrentWeather(location),
            fetchFiveDayWeather(location)
        ])
            .then( data => {
                const currentWeather = data[0];
                const fiveDayWeather = data[1];

                return {
                    currentWeather,
                    fiveDayWeather
                }
            })
            .catch(handleError);
    }

    // fetchCurrentWeather: (location) => {
    //     const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${apiKey}`);
        
    //     return axios.get(encodedURI)
    //         .then( (res) => {
    //             return res.data;
    //         });
    // },

    // fetchFiveDayWeather: (location) => {
    //     const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`);

    //     return axios.get(encodedURI)
    //         .then( (res) => {
    //             return res.data.list;
    //         })
    // }
}