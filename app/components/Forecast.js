import React, { Component } from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import Loading from './Loading';
import SimpleDayView from './SimpleDayView';

class Forecast extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      weatherData: null,
    }
  }  
  componentDidMount() {
    const location = queryString.parse(this.props.location.search);
    api.getWeatherData(location.city)
      .then( data => {
        console.log(data); //TODO: remove once done testing
        this.setState( () => {
          return {
            weatherData: data
          }
        });
      }
      );
  }

  render() {
    const weatherData = this.state.weatherData;
    const location = queryString.parse(this.props.location.search);
    return !this.state.weatherData
          ? <Loading />
          : <div>
              <h1 className="forecast-header">Results for {location.city}</h1>
              <div className="forecast-container">
                {weatherData.fiveDayWeather.map( (day) => {
                  return <SimpleDayView day={day} key={day.dt}/>
                })}
              </div>
            </div>

  }
}

module.exports = Forecast;