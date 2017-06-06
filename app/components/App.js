import React, {Component} from 'react';
import ReactRouter from 'react-router-dom';
import CitySearchForm from './CitySearchForm';
//var Router = ReactRouter.BrowserRouter;
//var Route = ReactRouter.Route;

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <h1>My Weather App</h1>
                    <CitySearchForm flexDir="row"/>
                </div>
                <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1 className='header'>Enter a City and State</h1>
                    <CitySearchForm flexDir='column' />
                </div>
            </div>
        )
    }
};



export default App