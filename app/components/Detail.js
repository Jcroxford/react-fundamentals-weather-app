import React, {Component} from 'react';
import SimpleDayView from './SimpleDayView';
import {convertToFarenheit} from '../utils/dates';

class Detail extends Component {
  render() {
    const city = this.props.location.city;
    const weatherData = this.props.location.state;
    return (
      <div>
        <SimpleDayView day={weatherData} />
        <div className="description-container">
          <p>{city}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>Min temp: {convertToFarenheit(weatherData.temp.min)} degrees</p>
          <p>max temp: {convertToFarenheit(weatherData.temp.max)} degrees</p>
          <p>humidity: {weatherData.humidity}</p>
        </div>
      </div>
    )
  }
}

module.exports = Detail;