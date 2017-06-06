import React, {Component} from 'react';
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
        console.log(`you typed in ${this.state.location}`);
        // current weather request
        // api.fetchCurrentWeather(this.state.location)
        //     .then( (res) => {
        //         console.log(res);
        //     });


        // 5 day weather request
        api.fetchFiveDayWeather(this.state.location)
            .then( (res) => {
                console.log(res);
            });
    }

    render() {
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
                    Get Weather
                </button>
            </form>
        );
    }
}

module.exports = CitySearchForm;