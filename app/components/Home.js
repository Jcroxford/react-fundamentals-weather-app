import React, {Componenet} from 'react';
import CitySearchForm from './CitySearchForm';

const Home = () => 
  <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
    <h1 className='header'>Enter a City and State</h1>
    <CitySearchForm flexDir='column' />
  </div>


module.exports = Home;