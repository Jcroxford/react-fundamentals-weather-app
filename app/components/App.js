//TODO: prevent routing with an empty text field
//TODO: allow routing to occur when hitting enter as well as when the button is pressed
//TODO: header search appears to not work on forecast route(page is not repopulated with new data)
//TODO: add ability on individual day view to back track to 5 day view
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CitySearchForm from './CitySearchForm';
import Forecast from './Forecast';
import Detail from './Detail';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="navbar">
                        <Link to='/'>
                            <h1>My Weather App</h1>
                        </Link>
                        <CitySearchForm flexDir="row"/>
                    </div>
                    <Switch>
                        <Route exact path='/' render={ () => (
                            <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                                <h1 className='header'>Enter a City and State</h1>
                                <CitySearchForm flexDir='column' />
                            </div>
                        )} />
                        <Route exact path='/forecast' component={Forecast} />
                        <Route path='/details/:city' component={Detail} />
                        <Route render={ () => <p>404 Page Not Found</p>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
};



export default App