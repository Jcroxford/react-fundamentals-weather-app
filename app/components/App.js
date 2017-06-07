import React, {Component} from 'react';
//import ReactRouter from 'react-router-dom';
import {BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import CitySearchForm from './CitySearchForm';
import Forecast from './Forecast';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="navbar">
                        <h1>My Weather App</h1>
                        <CitySearchForm flexDir="row"/>
                    </div>
                    <Switch>
                        <Route exact path='/' render={ () => (
                            <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                                <h1 className='header'>Enter a City and State</h1>
                                <CitySearchForm flexDir='column' />
                            </div>
                        )} />
                        
                        <Route path='/forecast' component={Forecast} />
                        
                        <Route render={ () => <p>404 Page Not Found</p>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
};



export default App