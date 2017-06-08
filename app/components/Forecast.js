import React, { Component } from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import Loading from './Loading';

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
    return (
      <div className>
        {!this.state.weatherData
          ? <Loading />
          : <div>Forcast Component Test</div>}
      </div>
    )
  }
}

module.exports = Forecast;