//TODO: prevent routing with an empty text field
//TODO: allow routing to occur when hitting enter as well as when the button is pressed
//TODO: header search appears to not work on forecast route
import React, {Component} from 'react';
import Router, {Link} from 'react-router-dom';
import api from '../utils/api';

class CitySearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(`you typed in ${this.state.location}`);
        // // current weather request
        // // api.fetchCurrentWeather(this.state.location)
        // //     .then( (res) => {
        // //         console.log(res);
        // //     });


        // // 5 day weather request
        // api.fetchFiveDayWeather(this.state.location)
        //     .then( (res) => {
        //         console.log(res);
        //     });
        
        
    }

    render() {
        const location = this.state.location;

        return(
            <form 
                className="zipcode-container" 
                style={{flexDirection: this.props.flexDir}}
                onSubmit={this.handleSubmit}
            >
                <input
                    className="form-control"
                    type="text"
                    placeholder="St. George, UT"
                    value={this.state.value} 
                    onChange={this.handleChange}
                    required 
                />
                <button 
                    type="submit" 
                    className="btn btn-success"
                    style={{margin: 10}}
                >
                    <Link to={{
                        pathname: '/forecast',
                        search:  `?city=${location}`
                    }}>
                        Get Weather
                    </Link>
                </button>
            </form>
        );
    }
}

module.exports = CitySearchForm;