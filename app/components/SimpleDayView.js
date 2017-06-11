import React, {component} from 'react';
import {getDate}          from '../utils/dates';

const SimpleDayView = props => {
  const date = getDate(props.day.dt);
  return (
    <div onClick={props.onClick} className="dayContainer">
      <img 
        src={`/app/images/weather-icons/${props.day.weather[0].icon}.svg`} 
        alt='display for weather conditions'
        className="weather"
      />
      <h2 className="subheader">
        {`${date.englishDay}, ${date.month} ${date.monthDay}`}
      </h2>
    </div>
  )
}

module.exports = SimpleDayView;