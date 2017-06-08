import React, { Component } from 'react';
import queryString from 'query-string';
import api from '../utils/api';

class Forecast extends Component {  
  componentDidMount() {
    const location = queryString.parse(this.props.location.search);
    api.getWeatherData(location.city)
      .then( data => 
          console.log(data)
      );
  }

  render() {
    return (
      <div>Forcast Component Test</div>
    )
  }
}

module.exports = Forecast;