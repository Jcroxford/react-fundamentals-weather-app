import React, { Component } from 'react';
import queryString from 'query-string';

import Loading from './Loading';
import SimpleDayView from './SimpleDayView';
import Detail from './Detail'
import api from '../utils/api';

class Forecast extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      weatherData: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }  
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    api.getWeatherData(this.city)
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

  handleClick(city) { 
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: city
    });
  }

  render() {
    const weatherData = this.state.weatherData;
    const location = queryString.parse(this.props.location.search);
    return !this.state.weatherData
          ? <Loading />
          : <div>
              <h1 className="forecast-header">Results for {location.city}</h1>
              <div className="forecast-container">
                {weatherData.fiveDayWeather.map( day => {
                  return <SimpleDayView onClick={this.handleClick.bind(this, day)} day={day} key={day.dt}/>
                })}
              </div>
            </div>

  }
}

module.exports = Forecast;