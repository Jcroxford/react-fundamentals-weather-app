import React, {component} from 'react';
import {getDate} from '../utils/dates';

function SimpleDayView (props) {
  console.log(props.day.dt);
  const date = getDate(props.day.dt);
  return (
    <div onclick={props.onClick} className="dayContainer">
      <img 
        src={`app/images/weather-icons/${props.day.weather[0].icon}.svg`} 
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